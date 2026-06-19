<script>
  import { onMount, onDestroy } from 'svelte';
  import {
    CONFIG, timiSVG, escapeHtml, getTime,
    miniTimiSVG, humanAvatarSVG,
  } from '$lib/utils';
  import PcSidebar from '$lib/components/PcSidebar.svelte';
  import MobileSidebar from '$lib/components/MobileSidebar.svelte';
  import InputBar from '$lib/components/InputBar.svelte';
  import WelcomeCard from '$lib/components/WelcomeCard.svelte';
  import ChatMessage from '$lib/components/ChatMessage.svelte';

  // Svelte 5 runes 状态
  let conversations = $state([]);
  let currentMessages = $state([]);
  let currentId = $state(null);
  let isLoading = $state(false);
  let isPC = $state(true);
  let mobSidebarOpen = $state(false);

  let chatArea;

  // 初始化
  onMount(() => {
    try {
      const raw = localStorage.getItem('timi_conversations');
      if (raw) {
        conversations = JSON.parse(raw);
      }
    } catch {
      conversations = [];
    }
    isPC = window.innerWidth > 768;
    window.addEventListener('resize', onResize);
    onDestroy(() => {
      window.removeEventListener('resize', onResize);
    });
  });

  function onResize() {
    isPC = window.innerWidth > 768;
  }

  function saveConversations() {
    localStorage.setItem('timi_conversations', JSON.stringify(conversations));
  }

  function getConvById(id) {
    return conversations.find(c => c.id === id);
  }

  // 标题截断：前10个字
  function truncateTitle(text, maxLen = 10) {
    return text.length <= maxLen ? text : text.slice(0, maxLen) + '…';
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
    });
  }

  // ==================== 对话操作 ====================

  function doNewChat() {
    currentId = null;
    currentMessages = [];
    isLoading = false;
    mobSidebarOpen = false;
  }

  function switchConversation(id) {
    const conv = getConvById(id);
    currentId = id;
    currentMessages = conv ? [...(conv.messages || [])] : [];
    isLoading = false;
    scrollToBottom();
    mobSidebarOpen = false;
  }

  function deleteConversation(id) {
    conversations = conversations.filter(c => c.id !== id);
    saveConversations();
    if (currentId === id) {
      currentId = null;
      currentMessages = [];
      isLoading = false;
    }
  }

  // 发送消息
  async function handleSend(text) {
    if (!text || isLoading) return;

    let conv = getConvById(currentId);

    // 没有当前对话 → 创建新对话
    if (!conv) {
      const newConv = {
        id: 'conv_' + Date.now(),
        title: truncateTitle(text, 10),
        messages: [],
        created: Date.now(),
      };
      conversations = [newConv, ...conversations];
      currentId = newConv.id;
      conv = newConv;
      currentMessages = [];
      saveConversations();
    }

    // 添加用户消息
    const userMsg = { role: 'user', content: text, time: getTime() };
    currentMessages = [...currentMessages, userMsg];
    conv.messages = [...conv.messages, userMsg];
    saveConversations();
    scrollToBottom();

    // 加载状态
    isLoading = true;

    try {
      const resp = await fetch(CONFIG.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + CONFIG.API_KEY,
        },
        body: JSON.stringify({
          inputs: {},
          query: text,
          response_mode: 'blocking',
          user: 'user_' + Date.now(),
        }),
      });

      let reply = '暂无回复';
      if (resp.ok) {
        const data = await resp.json();
        reply = data.answer || (data.data && data.data.answer) || data.result || '暂无回复';
      } else {
        reply = '⚠️ 抱歉，服务暂时不可用，请稍后再试。';
      }

      const botMsg = { role: 'bot', content: reply, time: getTime() };
      currentMessages = [...currentMessages, botMsg];
      conv.messages = [...conv.messages, botMsg];
      saveConversations();
      scrollToBottom();
    } catch (err) {
      console.error('API 请求失败:', err);
      const errMsg = '⚠️ 网络异常，请检查连接后重试。';
      const botMsg = { role: 'bot', content: errMsg, time: getTime() };
      currentMessages = [...currentMessages, botMsg];
      conv.messages = [...conv.messages, botMsg];
      saveConversations();
      scrollToBottom();
    } finally {
      isLoading = false;
    }
  }

  function handleQuickSend(text) {
    handleSend(text);
  }

  function handleSelect(id) {
    switchConversation(id);
  }

  function handleDelete(id) {
    deleteConversation(id);
  }
</script>

<!-- 移动端侧边栏 -->
<MobileSidebar
  conversations={conversations}
  currentId={currentId}
  isOpen={mobSidebarOpen}
  onNewChat={doNewChat}
  onSelect={handleSelect}
  onDelete={handleDelete}
  onClose={() => { mobSidebarOpen = false; }}
/>

<!-- 页面主体 -->
<div class="page-shell">
  <!-- PC 侧边栏 -->
  <div class="pc-only">
    <PcSidebar
      conversations={conversations}
      currentId={currentId}
      onNewChat={doNewChat}
      onSelect={handleSelect}
      onDelete={handleDelete}
    />
  </div>

  <!-- 主区域 -->
  <div class="main">
    <!-- PC 顶部栏 -->
    <div class="topbar pc-only">
      <div>
        <div class="topbar-title">Timi · 入学助手</div>
        <div class="topbar-sub">有任何入学问题尽管问我吧</div>
      </div>
    </div>

    <!-- 移动端头部 -->
    <div class="mobile-header mobile-only">
      <button
        class="mob-avatar"
        onclick={() => { mobSidebarOpen = true; }}
        aria-label="打开对话历史"
      >
        {@html timiSVG(24)}
      </button>
      <div class="mob-info">
        <div class="mob-title">Timi · 入学助手</div>
        <div class="mob-status"><span class="dot"></span> 在线答疑</div>
      </div>
    </div>

    <!-- 聊天区域 -->
    <div class="chat-area" bind:this={chatArea}>
      <!-- 欢迎页：没有当前对话时显示 -->
      {#if !currentId}
        <WelcomeCard isPC={isPC} onQuickSend={handleQuickSend} />
      {/if}

      <!-- 聊天消息：有当前对话时，显示当前消息列表 -->
      {#if currentId}
        {#each currentMessages as msg}
          <ChatMessage role={msg.role} content={msg.content} time={msg.time} />
        {/each}
        {#if isLoading}
          <div class="message bot">
            <div class="msg-avatar bot">{@html miniTimiSVG()}</div>
            <div class="msg-content">
              <div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>
            </div>
          </div>
        {/if}
      {/if}
    </div>

    <!-- 输入栏 -->
    <div class="input-bar">
      <!-- PC 输入框 -->
      <div class="pc-input pc-only">
        <InputBar disabled={isLoading} onSend={handleSend} />
        <div class="input-hint">按 Enter 发送，Shift + Enter 换行 · 提蜜蜜由 Dify-RAG 驱动</div>
      </div>
      <!-- 移动端输入框 -->
      <div class="mob-input mobile-only">
        <InputBar disabled={isLoading} onSend={handleSend} />
      </div>
    </div>
  </div>
</div>

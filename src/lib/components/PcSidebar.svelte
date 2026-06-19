<script>
  import { newChatIconSVG, chatIcon, timiSVG } from '$lib/utils';

  let {
    conversations = [],
    currentId = null,
    onNewChat = () => {},
    onSelect = () => {},
    onDelete = () => {},
  } = $props();

  let brandIconEl;

  $effect(() => {
    if (brandIconEl) {
      brandIconEl.innerHTML = timiSVG(26);
    }
  });

  function truncateTitle(text, maxLen = 15) {
    return text.length <= maxLen ? text : text.slice(0, maxLen) + '…';
  }
</script>

<div class="sidebar" id="sidebar">
  <!-- 顶部：品牌 + 新建对话 -->
  <div class="sidebar-top">
    <div class="brand">
      <div class="brand-icon" bind:this={brandIconEl}></div>
      <div class="brand-text">
        <h1>Timi</h1>
        <span>入学智能助手</span>
      </div>
    </div>
    <button class="new-chat-btn" onclick={onNewChat}>
      {@html newChatIconSVG()}
      新建对话
    </button>
  </div>

  <!-- 中间：历史对话列表（可滚动） -->
  <div class="chat-history" id="histList">
    {#if conversations.length > 0}
      {#each conversations as conv (conv.id)}
        <div
          class="hist-item {conv.id === currentId ? 'active' : ''}"
          onclick={() => onSelect(conv.id)}
        >
          <span class="icon">{chatIcon()}</span>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;">{truncateTitle(conv.title)}</span>
          <button
            class="del-btn"
            onclick={(e) => { e.stopPropagation(); onDelete(conv.id); }}
            title="删除"
          >
            ✕
          </button>
        </div>
      {/each}
    {/if}
  </div>

  <!-- 底部：品牌状态 — 固定在侧边栏最下方 -->
  <div class="sidebar-footer">
    <span class="status-dot"></span>
    Timi在线 · powered by Dify-RAG
  </div>
</div>

<style>
  .sidebar {
    width: 280px;
    background: #ffffff;
    border-right: 1px solid #ccfccb;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 100vh;
  }
  .sidebar-top {
    padding: 20px 18px 14px;
    border-bottom: 1px solid #ccfccb;
    flex-shrink: 0;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .brand-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, #96e6b3, #ccfccb);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
    flex-shrink: 0;
    cursor: pointer;
  }
  .brand-icon svg {
    width: 26px;
    height: 26px;
  }
  .brand-text h1 {
    font-size: 15px;
    font-weight: 600;
  }
  .brand-text span {
    font-size: 11px;
    color: #8a9a8d;
  }

  .new-chat-btn {
    width: 100%;
    margin-top: 14px;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1.5px dashed #96e6b3;
    background: transparent;
    color: #568259;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: inherit;
  }
  .new-chat-btn:hover {
    background: #ccfccb;
    border-style: solid;
  }

  /* 对话列表 — 可滚动区域 */
  .chat-history {
    flex: 1;
    overflow-y: auto;
    padding: 10px 8px;
  }
  .chat-history::-webkit-scrollbar { width: 3px; }
  .chat-history::-webkit-scrollbar-thumb { background: #ccfccb; border-radius: 3px; }

  .hist-item {
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    color: #464e47;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;
  }
  .hist-item:hover { background: #f1fffa; }
  .hist-item.active { background: #ccfccb; font-weight: 500; }
  .hist-item .icon { opacity: 0.5; }
  .hist-item .del-btn {
    margin-left: auto;
    opacity: 0;
    transition: opacity 0.2s;
    background: none;
    border: none;
    color: #8a9a8d;
    font-size: 14px;
    cursor: pointer;
    padding: 2px 4px;
    font-family: inherit;
  }
  .hist-item:hover .del-btn { opacity: 1; }

  /* 底部品牌状态 — 固定在侧边栏最下方 */
  .sidebar-footer {
    padding: 14px 18px;
    border-top: 1px solid #ccfccb;
    font-size: 11px;
    color: #8a9a8d;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .sidebar-footer .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4caf50;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
</style>

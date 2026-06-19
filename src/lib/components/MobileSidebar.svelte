<script>
  import { newChatIconSVG, chatIcon } from '$lib/utils';

  let {
    conversations = [],
    currentId = null,
    isOpen = false,
    onNewChat = () => {},
    onSelect = () => {},
    onDelete = () => {},
    onClose = () => {},
  } = $props();

  function truncateTitle(text, maxLen = 15) {
    return text.length <= maxLen ? text : text.slice(0, maxLen) + '…';
  }
</script>

{#if isOpen}
  <div class="overlay" onclick={onClose}></div>
{/if}

<div class="mob-sidebar" class:open={isOpen}>
  <div class="mob-sidebar-header">
    <span style="font-size:15px;font-weight:600;">对话历史</span>
    <button class="close-btn" onclick={onClose}>✕</button>
  </div>
  <div class="mob-sidebar-body">
    <button class="mob-new-chat" onclick={onNewChat}>
      {@html newChatIconSVG()}
      新建对话
    </button>
    {#if conversations.length === 0}
      <div class="empty-hint">
        <div class="icon">💬</div>
        <div>暂无对话记录</div>
        <div style="font-size:11px;margin-top:4px;">发送第一条消息开始</div>
      </div>
    {:else}
      {#each conversations as conv (conv.id)}
        <div
          class="hist-item {conv.id === currentId ? 'active' : ''}"
          onclick={() => { onSelect(conv.id); onClose(); }}
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
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.35);
    z-index: 99;
  }

  .mob-sidebar {
    position: fixed;
    top: 0;
    left: -300px;
    width: 280px;
    height: 100vh;
    background: #ffffff;
    z-index: 100;
    transition: left 0.3s ease;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 20px rgba(0,0,0,.1);
  }
  .mob-sidebar.open {
    left: 0;
  }
  .mob-sidebar-header {
    padding: 20px 18px 14px;
    border-bottom: 1px solid #ccfccb;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 22px;
    color: #8a9a8d;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: background 0.2s;
    font-family: inherit;
  }
  .close-btn:hover { background: #ccfccb; }

  .mob-sidebar-body {
    flex: 1;
    overflow-y: auto;
    padding: 6px 0;
  }
  .mob-sidebar-body::-webkit-scrollbar { width: 3px; }
  .mob-sidebar-body::-webkit-scrollbar-thumb { background: #ccfccb; border-radius: 3px; }

  .mob-sidebar-body .hist-item {
    margin: 2px 8px;
    border-radius: 10px;
    padding: 12px 14px;
  }

  .mob-new-chat {
    width: 100%;
    margin-bottom: 14px;
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
  .mob-new-chat:hover {
    background: #ccfccb;
    border-style: solid;
  }

  .empty-hint {
    text-align: center;
    padding: 32px 16px;
    color: #8a9a8d;
    font-size: 13px;
  }
  .empty-hint .icon { font-size: 36px; margin-bottom: 8px; }
</style>

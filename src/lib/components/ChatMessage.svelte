<script>
  import { miniTimiSVG, humanAvatarSVG, escapeHtml, getTime } from '$lib/utils';

  let { role = 'bot', content = '', time } = $props();
  let displayTime = time ?? getTime();
</script>

<div class="message" class:user={role === 'user'} class:bot={role === 'bot'}>
  <div class="msg-avatar {role === 'bot' ? 'bot' : 'human'}">
    {#if role === 'bot'}
      {@html miniTimiSVG()}
    {:else}
      {@html humanAvatarSVG()}
    {/if}
  </div>
  <div class="msg-content">
    <div class="msg-bubble">
      {@html escapeHtml(content)}
    </div>
    <div class="msg-time">{displayTime}</div>
  </div>
</div>

<style>
  .message {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
    animation: msgIn 0.3s ease both;
  }
  .message.user {
    flex-direction: row-reverse;
  }
  @keyframes msgIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

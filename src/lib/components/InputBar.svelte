<script>
  import { sendIconSVG } from '$lib/utils';

  let { disabled = false, onSend = () => {} } = $props();

  let textarea;
  let value = $state('');

  function handleSend() {
    const text = value.trim();
    if (!text || disabled) return;
    value = '';
    onSend(text);
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function autoResize() {
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  }
</script>

<div class="input-row">
  <textarea
    bind:this={textarea}
    bind:value
    placeholder="输入你的问题..."
    onkeydown={handleKeydown}
    oninput={autoResize}
    disabled={disabled}
    rows="1"
  ></textarea>
  <button
    class="send-btn"
    disabled={disabled}
    onclick={handleSend}
  >
    {@html sendIconSVG()}
  </button>
</div>

<style>
  .input-row {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  textarea {
    flex: 1;
    border: 1.5px solid #ccfccb;
    border-radius: 16px;
    padding: 10px 16px;
    font-size: 14px;
    resize: none;
    outline: none;
    line-height: 1.5;
    font-family: inherit;
    color: #464e47;
    background: #f1fffa;
    min-height: 40px;
    max-height: 120px;
    transition: border-color 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  textarea::placeholder {
    font-size: 14px;
  }
  textarea:focus {
    border-color: #96e6b3;
  }
  textarea::placeholder {
    color: #8a9a8d;
  }

  .send-btn {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #568259, #3d5e40);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(86,130,89,.3);
    flex-shrink: 0;
  }
  .send-btn:active {
    transform: scale(0.92);
  }
  .send-btn:disabled {
    opacity: 0.4;
    transform: none;
    box-shadow: none;
  }
</style>

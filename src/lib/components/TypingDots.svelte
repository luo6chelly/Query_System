<div class="typing-dots">
  <span></span>
  <span></span>
  <span></span>
</div>

<style>
  .typing-dots {
    display: flex;
    gap: 5px;
    padding: 4px 0;
  }
  .typing-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #96e6b3;
    animation: dotBounce 1.2s infinite;
  }
  .typing-dots span:nth-child(2) { animation-delay: .2s; }
  .typing-dots span:nth-child(3) { animation-delay: .4s; }
  @keyframes dotBounce {
    0%, 60%, 100% { transform: translateY(0); opacity: .4; }
    30% { transform: translateY(-8px); opacity: 1; }
  }
</style>

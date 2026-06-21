<script>
  import { timiSVG } from '$lib/utils';

  let { isPC = false, onQuickSend = () => {} } = $props();

  const QUICK_QUESTIONS = [
    '怎么办理报到手续？',
    '宿舍分配规则是什么？',
    '校园卡怎么开通？',
    '开学时间是什么时候？',
  ];
</script>

<div class="welcome-card" class:is-pc={isPC}>
  <div class="timi-hero">{@html timiSVG(isPC ? 130 : 100)}</div>
  <h2>你好呀，新同学！🎉</h2>
  <p>我是提蜜蜜，你的入学小助手<br>关于学校的任何问题，都可以问我哦～</p>
  <div class="quick-actions">
    {#each QUICK_QUESTIONS as q}
      <button class="quick-btn" onclick={() => onQuickSend(q)}>
        {q}
      </button>
    {/each}
  </div>
</div>

<style>
  .welcome-card {
    text-align: center;
    animation: fadeUp 0.6s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .timi-hero {
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  h2 {
    font-size: 22px;
    color: #568259;
    margin-bottom: 8px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #8a9a8d;
    line-height: 1.7;
  }

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  .quick-btn {
    padding: 10px 18px;
    border-radius: 22px;
    border: 1.5px solid #96e6b3;
    background: #ffffff;
    color: #568259;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .quick-btn:hover {
    background: #96e6b3;
    color: #464e47;
    transform: translateY(-1px);
  }

  /* PC 端欢迎页 */
  .is-pc .timi-hero {
    width: 130px;
    height: 130px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .is-pc .timi-hero img {
    display: block;
    margin: 0 auto;
  }
  .is-pc h2 {
    font-size: 24px;
  }

  /* PC 端浮动幅度减小 */
  .is-pc .timi-hero {
    animation: floatSmall 3s ease-in-out infinite;
  }
  @keyframes floatSmall {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* 移动端欢迎页 */
  @media (max-width: 768px) {
    .welcome-card {
      padding: 0 4px;
    }
    .welcome-card .timi-hero {
      width: 80px !important;
      height: 80px !important;
      margin: 0 auto 12px !important;
      transform: translateX(-15px) translateY(-10px)!important;
    }
    .welcome-card h2 {
      font-size: 18px !important;
    }
    .welcome-card p {
      font-size: 13px !important;
    }
    .welcome-card .quick-actions {
      gap: 8px;
    }
    .welcome-card .quick-btn {
      padding: 8px 14px;
      font-size: 12px;
    }
  }
</style>

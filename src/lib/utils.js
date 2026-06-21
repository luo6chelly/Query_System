// CONFIG
export const CONFIG = {
  API_URL: "https://3dbe7bbe.r24.cpolar.top/v1/chat-messages",
  API_KEY: "app-MwVxxlTE17Cv5o3BkhypOucL",
};

// 主题色
export const THEME = {
  mintCream: '#f1fffa',
  teaGreen:  '#ccfccb',
  celadon:   '#96e6b3',
  fern:      '#568259',
  fernDark:  '#3d5e40',
  ironGrey:  '#464e47',
  white:     '#ffffff',
  gray:      '#8a9a8d',
};

// 配色常量（保留，无副作用）
const TIMI_BODY_COLOR = '#f5c542';
const TIMI_STRIPE_COLOR = '#3a3328';
const TIMI_WING_COLOR = 'rgba(173,216,255,.5)';
const TIMI_WING_BORDER = '#89c4e8';
const TIMI_BLUSH = 'rgba(255,150,150,.35)';

// 全局Timi大图接口，使用透明背景 PNG
export function timiSVG(size) {
  return `<img src="/吉祥物timi.png" alt="Timi" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:8px;">`;
}

// 新建对话加号图标
export function newChatIconSVG() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function chatIcon() { return '💬'; }

// 发送按钮箭头图标
export function sendIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">` +
    `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` +
    `</svg>`;
}

// 聊天加载框迷你头像
export function miniTimiSVG() {
  return `<img src="/吉祥物timi.png" alt="Timi" style="width:22px;height:22px;object-fit:contain;border-radius:6px;">`;
}

// 用户头像svg 保持原样
export function humanAvatarSVG() {
  return `<svg viewBox="0 0 100 100" width="22" height="22" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="50" cy="36" r="16" fill="${TIMI_BODY_COLOR}"/>` +
    `<circle cx="44" cy="34" r="2" fill="#fff"/>` +
    `<circle cx="56" cy="34" r="2" fill="#fff"/>` +
    `<path d="M44 40 Q50 46 56 40" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` +
    `<ellipse cx="50" cy="78" rx="22" ry="18" fill="${TIMI_BODY_COLOR}"/>` +
    `</svg>`;
}

// 对话标题截断
export function truncateTitle(text, maxLen = 15) {
  return text.length <= maxLen ? text : text.slice(0, maxLen) + '…';
}

// 获取当前时分
export function getTime() {
  var d = new Date();
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

// 消息换行转br
export function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML.replace(/\n/g, '<br>');
}
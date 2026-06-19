// CONFIG
export const CONFIG = {
  API_URL: "http://10.60.87.171:8080/v1/chat-messages",
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

// 常量
const TIMI_BODY_COLOR = '#f5c542';
const TIMI_STRIPE_COLOR = '#3a3328';
const TIMI_WING_COLOR = 'rgba(173,216,255,.5)';
const TIMI_WING_BORDER = '#89c4e8';
const TIMI_BLUSH = 'rgba(255,150,150,.35)';

// Timi SVG 生成
export function timiSVG(size) {
  return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">` +
    `<ellipse cx="62" cy="66" rx="42" ry="30" fill="${TIMI_WING_COLOR}" stroke="${TIMI_WING_BORDER}" stroke-width="1.5" transform="rotate(-22 62 66)"/>` +
    `<ellipse cx="138" cy="66" rx="42" ry="30" fill="${TIMI_WING_COLOR}" stroke="${TIMI_WING_BORDER}" stroke-width="1.5" transform="rotate(22 138 66)"/>` +
    `<ellipse cx="100" cy="116" rx="36" ry="42" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<line x1="66" y1="100" x2="134" y2="100" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<line x1="66" y1="116" x2="134" y2="116" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<line x1="66" y1="132" x2="134" y2="132" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<circle cx="100" cy="70" r="26" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<circle cx="90" cy="66" r="5" fill="${TIMI_STRIPE_COLOR}"/>` +
    `<circle cx="110" cy="66" r="5" fill="${TIMI_STRIPE_COLOR}"/>` +
    `<circle cx="91.5" cy="64" r="1.8" fill="#fff"/>` +
    `<circle cx="111.5" cy="64" r="1.8" fill="#fff"/>` +
    `<path d="M92 76 Q100 83 108 76" fill="none" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5" stroke-linecap="round"/>` +
    `<path d="M90 46 Q80 26 88 24" fill="none" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2" stroke-linecap="round"/>` +
    `<path d="M110 46 Q120 26 112 24" fill="none" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2" stroke-linecap="round"/>` +
    `<circle cx="88" cy="23" r="3.5" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5"/>` +
    `<circle cx="112" cy="23" r="3.5" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5"/>` +
    `<polygon points="95,156 100,170 105,156" fill="${TIMI_STRIPE_COLOR}"/>` +
    `<ellipse cx="80" cy="74" rx="6" ry="3.5" fill="${TIMI_BLUSH}"/>` +
    `<ellipse cx="120" cy="74" rx="6" ry="3.5" fill="${TIMI_BLUSH}"/>` +
    `<path d="M66 100 Q48 92 42 78" fill="none" stroke="${TIMI_BODY_COLOR}" stroke-width="5.5" stroke-linecap="round"/>` +
    `<path d="M66 100 Q48 92 42 78" fill="none" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5" stroke-linecap="round"/>` +
    `<path d="M134 100 Q152 92 158 78" fill="none" stroke="${TIMI_BODY_COLOR}" stroke-width="5.5" stroke-linecap="round"/>` +
    `<path d="M134 100 Q152 92 158 78" fill="none" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5" stroke-linecap="round"/>` +
    `</svg>`;
}

export function newChatIconSVG() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
}

export function chatIcon() { return '💬'; }

export function sendIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">` +
    `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` +
    `</svg>`;
}

export function miniTimiSVG() {
  return `<svg viewBox="0 0 100 100" width="22" height="22" xmlns="http://www.w3.org/2000/svg">` +
    `<ellipse cx="50" cy="58" rx="18" ry="20" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<line x1="36" y1="50" x2="64" y2="50" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<line x1="36" y1="58" x2="64" y2="58" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<line x1="36" y1="66" x2="64" y2="66" stroke="${TIMI_STRIPE_COLOR}" stroke-width="2"/>` +
    `<circle cx="42" cy="40" r="12" fill="${TIMI_BODY_COLOR}" stroke="${TIMI_STRIPE_COLOR}" stroke-width="1.5"/>` +
    `<circle cx="38" cy="38" r="2.5" fill="${TIMI_STRIPE_COLOR}"/>` +
    `<circle cx="46" cy="38" r="2.5" fill="${TIMI_STRIPE_COLOR}"/>` +
    `</svg>`;
}

export function humanAvatarSVG() {
  return `<svg viewBox="0 0 100 100" width="22" height="22" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="50" cy="36" r="16" fill="${TIMI_BODY_COLOR}"/>` +
    `<circle cx="44" cy="34" r="2" fill="#fff"/>` +
    `<circle cx="56" cy="34" r="2" fill="#fff"/>` +
    `<path d="M44 40 Q50 46 56 40" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` +
    `<ellipse cx="50" cy="78" rx="22" ry="18" fill="${TIMI_BODY_COLOR}"/>` +
    `</svg>`;
}

// 工具函数
export function truncateTitle(text, maxLen = 15) {
  return text.length <= maxLen ? text : text.slice(0, maxLen) + '…';
}

export function getTime() {
  var d = new Date();
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
}

export function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML.replace(/\n/g, '<br>');
}

# Timi · 高校新生入学智能问答系统

基于 Dify-RAG 的高校新生入学手册智能问答系统，提供移动端和 PC 端聊天界面。

## 项目简介

本项目是一个智能问答系统，新生可以通过自然语言提问，获取关于报到手续、宿舍分配、校园卡开通等入学相关问题的解答。系统后端基于 Dify-RAG 平台，前端采用 Svelte + Vite 构建，适配手机和电脑两种浏览方式。

## 技术栈

- **前端框架**：Svelte 5
- **构建工具**：Vite
- **后端服务**：Dify-RAG

## 快速开始

### 环境要求

- Node.js 18+

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

构建后的文件位于 `dist/` 目录，可通过 `npm run preview` 预览。

## 项目结构

```
├── src/
│   ├── lib/
│   │   └── components/      # 组件
│   │       ├── App.svelte         # 主页面
│   │       ├── PcSidebar.svelte   # PC 端侧边栏
│   │       ├── MobileSidebar.svelte # 移动端侧边栏
│   │       ├── InputBar.svelte    # 输入框组件
│   │       ├── ChatMessage.svelte # 消息气泡组件
│   │       ├── WelcomeCard.svelte # 欢迎卡片
│   │       └── TypingDots.svelte  # 打字动画
│   ├── assets/              # 静态资源
│   ├── utils.js             # 工具函数
│   ├── main.js              # 入口文件
│   └── app.css              # 全局样式
├── public/                  # 静态资源（图标等）
├── index.html               # 入口 HTML
├── vite.config.js           # Vite 配置
├── svelte.config.js         # Svelte 配置
└── package.json             # 项目依赖
```

## 功能说明

- **对话管理**：支持新建对话、切换历史对话、删除对话
- **消息发送**：输入问题后调用 Dify API 获取回复，支持多行输入
- **响应式布局**：PC 端左侧显示对话历史栏，右侧为聊天区；移动端侧边栏以抽屉形式滑出
- **本地存储**：对话历史通过 localStorage 持久化保存
- **移动端适配**：输入框、消息气泡、按钮均针对手机屏幕优化

## API 对接

项目通过 HTTP 请求与 Dify 服务通信，接口配置在 `src/utils.js` 中：

```javascript
const CONFIG = {
    API_URL: "http://your-dify-server/v1/chat-messages",
    API_KEY: "your-api-key"
};
```
const style = document.createElement('style');
style.innerText = `

/* animated-sidebar */
.center-column:before {
  left: -5px;
  width: 5px;
  position: absolute;
  content: "\\00a0";
  height: 100vh;
  background: linear-gradient(0deg, #6853b9, rgba(254,94,189,0.8), #6853b9, rgba(254,94,189,0.8), #6853b9);
  background-size: 100% 200%;
  animation: color_gradient 17s linear infinite;
}
@keyframes color_gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}

/* better-code-blocks */
code,
kbd,
pre,
samp {
  font: menlo !important;
}
.text pre {
  border-radius: 5px;
  background: #252426;
  font-size: 90%;
  line-height: 130%;
  color: #e0e2e4;
  font-family: Menlo, "Source Code Pro", monospace !important;
}
.hljs-keyword {
  color: #e784a2;
}
.hljs-attribute {
  color: #d64c5c;
}
.hljs-string {
  color: #4cd656;
}
.hljs-comment {
  color: #7d8c93;
  font-style: normal;
}
.hljs-tag {
  color: #e8e2b7;
}
.hljs-name,
.hljs-built_in {
  color: #e784a2;
  font-weight: bold;
}
.hljs-symbol {
  color: #fff;
  font-weight: bold;
}
.hljs-title {
  color: #85b5c7;
}
.hljs-number {
  color: #2dd5d5;
}
.hljs-regexp {
  color: #6b60aa;
}
.hljs-type,
.hljs-class .hljs-title {
  color: #85b5c7;
}
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #e0e2e4 !important;
}

/* dark-theme */

.button.button-inverts {
  background: transparent;
}
.theme-purple .accent-color-7,
.main-accent-color-7 .accent-color-7 {
  color: #6853b9;
}
.theme-purple .button,
.main-accent-color-7 .button {
  background-color: #6853b9;
}
.theme-purple .button.button-inverted,
.main-accent-color-7 .button.button-inverted {
  border-color: #6853b9;
}
.theme-purple a,
.main-accent-color-7 a,
.theme-purple .button,
.main-accent-color-7 .button {
  color: none;
}
.theme-purple a,
.main-accent-color-7 a {
  color: #6853b9;
}
.theme-purple .text-theme,
.main-accent-color-7 .text-theme {
  color: #6853b9;
}
#background,
.background,
.background-darken {
  background-color: #1e2022 !important;
}
.center-column {
  background-color: #222 !important;
  -moz-osx-font-smotohing: none !important;
}
.conversation-title-bar,
.preferences-titlebar {
  background-color: rgba(50,50,50,0) !important;
  color: rgba(200,200,200,0.8) !important;
}
.context-menu,
.message-body-actions .time,
.message-body-actions .message-status {
  background-color: rgba(0,0,0,0) !important;
  color: rgba(200,200,200,0.4) !important;
}
.conversation-input-bar {
/* rgba(141,152,159,0.48) */
  background-color: rgba(0,0,0,0.48);
/* opacity: 0.5; */
}
body {
  color: #fff;
  background-color: #323639;
}
.ctx-menu {
  color: #666;
  background: #333;
}
.detail-view.modal::before {
  background-color: rgba(0,0,0,0.64);
}
.right-column {
  background-color: #333 !important;
}
.panel__header path {
  fill: #666;
}
.app .right-column {
  box-shadow: -1px 0 0 #333;
}
.left-column-icon+div {
  background: none !important;
}
.preferences-titlebar {
  border-bottom: 1px solid rgba(141,152,159,0.05);
}
.preferences-content,
.preferences-options-checkbox-label {
  color: #cdc9c6;
}
.preferences-account-input:focus,
.preferences-account-input:hover {
  background-color: #333;
}
.detail-view.modal::before {
  background: rgba(34,34,34,0.933) !important;
}
.modal-content {
  background-color: #222 !important;
}

/* thin-sidebar */
.left-column {
  width: calc(36px * 1.75) !important;
  overflow: hidden;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.left-column .conversation-list-cell-name {
  display: none;
}
.messages-wrap,
.message {
  width: calc(100vw - 72px) !important;
}
.left-column:hover {
  width: 304px !important;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.left-column:hover .conversation-list-cell-name {
  display: inherit;
}
.conversation-list-cell-badge {
  z-index: 1;
  position: absolute;
  margin-top: 29px;
  left: 29px !important;
  min-width: 20px;
  min-height: 20px;
  transform: scale(0.8);
}
.background-image {
  display: none !important;
  background-image: none !important;
  filter: none !important;
  transform: none !important;
}
`;
document.head.appendChild(style);

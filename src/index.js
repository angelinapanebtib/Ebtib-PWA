// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 确保有一个 App.js 文件
import './index.css'; // 如果有全局样式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

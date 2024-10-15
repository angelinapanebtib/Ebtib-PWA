// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage'; // 引入 HomePage 组件
import LoginPage from './LoginPage'; // 引入 LoginPage 组件

// 选择要渲染的页面
const App = () => {
  return (
    <div>
      <HomePage />
      {/* <LoginPage /> 你可以在需要时切换这个 */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

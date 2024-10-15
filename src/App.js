// src/App.js
import React from 'react';
import HomePage from './pages/HomePage'; // 导入你的主页
import LoginPage from './pages/LoginPage'; // 如果需要登录页也导入

const App = () => {
  return (
    <div>
      <HomePage />
      {/* <LoginPage /> 如果需要登录页的话 */}
    </div>
  );
};

export default App;

/**
 * 主入口文件
 */

// 导入模块
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initThemeToggle } from './theme-toggle.js';

// 初始化侧边栏
function initSidebar() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebar-close');
  const overlay = document.getElementById('overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
  // 打开侧边栏
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    });
  }
  
  // 关闭侧边栏
  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // 恢复背景滚动
  }
  
  // 点击关闭按钮
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }
  
  // 点击遮罩层
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // 点击侧边栏链接
  if (sidebarLinks) {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeSidebar();
        // 延迟跳转，确保侧边栏完全关闭
        const targetUrl = this.href;
        if (targetUrl.startsWith(window.location.origin)) {
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 300);
        }
      });
    });
  }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化各个模块
  initNavigation();
  initAnimations();
  initThemeToggle();
  initSidebar();
});
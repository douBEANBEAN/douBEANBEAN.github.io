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
  
  // 检查所有元素是否存在
  console.log('menuToggle:', menuToggle);
  console.log('sidebar:', sidebar);
  console.log('sidebarClose:', sidebarClose);
  console.log('overlay:', overlay);
  
  // 打开侧边栏
  if (menuToggle && sidebar && overlay) {
    menuToggle.addEventListener('click', function() {
      console.log('点击了菜单按钮');
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // 防止背景滚动
      // 打开侧边栏时生成目录
      generateSidebarTOC();
    });
  }
  
  // 关闭侧边栏
  function closeSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // 恢复背景滚动
    }
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
  
  // 生成侧边栏目录
  function generateSidebarTOC() {
    const sidebarToc = document.getElementById('sidebar-toc');
    if (!sidebarToc) return;
    
    const headings = document.querySelectorAll('h1, h2, h3');
    const tocList = sidebarToc.querySelector('.sidebar-toc-list');
    
    if (tocList) {
      // 清空TOC列表（保留"始"和"末"）
      const tocTop = tocList.querySelector('.sidebar-toc-item:first-child');
      const tocBottom = tocList.querySelector('.sidebar-toc-item:last-child');
      tocList.innerHTML = '';
      tocList.appendChild(tocTop);
      
      // 添加标题到TOC
      headings.forEach(function(heading) {
        const id = heading.getAttribute('id');
        if (id) {
          const text = heading.textContent;
          const level = heading.tagName.substring(1);
          const li = document.createElement('li');
          li.className = `sidebar-toc-item sidebar-toc-level-${level}`;
          const a = document.createElement('a');
          a.href = `#${id}`;
          a.className = 'sidebar-toc-link';
          a.textContent = text;
          li.appendChild(a);
          tocList.appendChild(li);
        }
      });
      
      // 添加"末"
      tocList.appendChild(tocBottom);
      
      // 为目录链接添加点击事件
      const tocLinks = tocList.querySelectorAll('.sidebar-toc-link');
      tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            closeSidebar();
          }
        });
      });
    }
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
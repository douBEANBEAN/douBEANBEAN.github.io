/**
 * 导航功能模块
 */

// 初始化导航功能
export function initNavigation() {
  // 平滑滚动：点击导航链接时，页面平滑滚动到目标位置
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 只对站内链接生效
      if (this.href.startsWith(window.location.origin)) {
        e.preventDefault(); // 阻止默认跳转
        const targetUrl = this.href;
        // 延迟跳转，保留平滑感（可根据需要调整）
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 100);
      }
    });
  });
}
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
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

  // 博文卡片 hover 时的轻微缩放效果（可选）
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
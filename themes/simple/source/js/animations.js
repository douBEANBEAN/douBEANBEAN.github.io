/**
 * 动画效果模块
 */

// 初始化动画效果
export function initAnimations() {
  // 博文卡片 hover 时的轻微缩放效果
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.01)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // 时间轴内容 hover 效果
  const timelineItems = document.querySelectorAll('.timeline-content');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}
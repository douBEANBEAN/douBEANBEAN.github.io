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
  
  // 滚动时文章卡片和时间轴内容向上浮现效果
  const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px 100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 为每个卡片设置初始状态并开始观察
  postCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.03}s`;
    observer.observe(card);
  });
  
  // 为每个时间轴内容设置初始状态并开始观察
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.style.transitionDelay = `${index * 0.03}s`;
    observer.observe(item);
  });
}
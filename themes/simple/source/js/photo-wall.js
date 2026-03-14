/**
 * 照片墙交互效果模块
 */

// 初始化照片墙交互效果
export function initPhotoWall() {
  const rope = document.getElementById('rope');
  
  if (rope) {
    // 麻绳点击震动效果
    rope.addEventListener('click', function() {
      this.classList.add('shake');
      
      // 动画结束后移除shake类
      setTimeout(() => {
        this.classList.remove('shake');
      }, 1000);
    });
  }
}
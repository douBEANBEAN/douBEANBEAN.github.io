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

  // 模式切换功能
  const modeButton = document.getElementById('mode-toggle-btn');
  const body = document.body;
  
  // 模式顺序：light -> dark -> color -> light
  const modeOrder = ['light', 'dark', 'color'];
  const modeIcons = {
    light: '☀️',
    dark: '🌙',
    color: '🌈'
  };
  const modeTitles = {
    light: '切换到夜间模式',
    dark: '切换到彩色模式',
    color: '切换到日间模式'
  };

  // 从localStorage加载保存的模式
  function loadSavedMode() {
    const savedMode = localStorage.getItem('siteMode') || 'light';
    setMode(savedMode);
  }

  // 设置模式
  function setMode(mode) {
    console.log('Setting mode:', mode);
    // 移除所有模式类
    body.classList.remove('dark-mode', 'color-mode');
    console.log('Classes after removal:', body.className);
    
    // 添加当前模式类
    if (mode === 'dark') {
      body.classList.add('dark-mode');
    } else if (mode === 'color') {
      body.classList.add('color-mode');
    }
    console.log('Classes after addition:', body.className);
    
    // 更新按钮图标和标题
    if (modeButton) {
      modeButton.textContent = modeIcons[mode];
      modeButton.title = modeTitles[mode];
      console.log('Button updated:', modeButton.textContent);
    }
    
    // 保存到localStorage
    localStorage.setItem('siteMode', mode);
    console.log('Mode saved to localStorage:', mode);
  }

  // 循环切换模式
  function cycleMode() {
    console.log('Button clicked');
    const currentMode = localStorage.getItem('siteMode') || 'light';
    console.log('Current mode:', currentMode);
    const currentIndex = modeOrder.indexOf(currentMode);
    console.log('Current index:', currentIndex);
    const nextIndex = (currentIndex + 1) % modeOrder.length;
    console.log('Next index:', nextIndex);
    const nextMode = modeOrder[nextIndex];
    console.log('Next mode:', nextMode);
    setMode(nextMode);
  }

  // 为模式按钮添加点击事件
  if (modeButton) {
    modeButton.addEventListener('click', cycleMode);
  }

  // 初始化加载保存的模式
  loadSavedMode();
});
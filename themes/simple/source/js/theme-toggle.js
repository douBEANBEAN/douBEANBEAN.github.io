/**
 * 主题切换功能模块
 */

// 初始化主题切换功能
export function initThemeToggle() {
  const modeButton = document.getElementById('mode-toggle-btn');
  const body = document.body;
  
  // 模式顺序：light -> dark -> light
  const modeOrder = ['light', 'dark'];
  const modeIcons = {
    light: '☀️',
    dark: '🌙'
  };
  const modeTitles = {
    light: '切换到夜间模式',
    dark: '切换到日间模式'
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
}
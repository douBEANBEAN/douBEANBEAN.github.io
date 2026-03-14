/**
 * 主题切换功能模块
 */

// 初始化主题切换功能
export function initThemeToggle() {
  const navModeButton = document.getElementById('theme-toggle');
  const sidebarModeButton = document.getElementById('sidebar-theme-toggle');
  const body = document.body;
  
  // 模式顺序：light -> dark -> light
  const modeOrder = ['light', 'dark'];
  const modeTexts = {
    light: '夜',
    dark: '日'
  };
  const modeTitles = {
    light: '切换到夜间',
    dark: '切换到日间'
  };

  // 从localStorage加载保存的模式
  function loadSavedMode() {
    const savedMode = localStorage.getItem('siteMode') || 'light';
    setMode(savedMode);
  }

  // 设置模式
  function setMode(mode) {
    // 移除所有模式类
    body.classList.remove('dark-mode', 'color-mode');
    
    // 添加当前模式类
    if (mode === 'dark') {
      body.classList.add('dark-mode');
    }
    
    // 更新按钮文字和标题
    const text = modeTexts[mode];
    const title = modeTitles[mode];
    
    if (navModeButton) {
      const navTextElement = navModeButton.querySelector('.theme-toggle-text');
      if (navTextElement) {
        navTextElement.textContent = text;
      }
      navModeButton.title = title;
    }
    
    if (sidebarModeButton) {
      const sidebarTextElement = sidebarModeButton.querySelector('.theme-toggle-text');
      if (sidebarTextElement) {
        sidebarTextElement.textContent = text;
      }
      sidebarModeButton.title = title;
    }
    
    // 保存到localStorage
    localStorage.setItem('siteMode', mode);
  }

  // 循环切换模式
  function cycleMode() {
    const currentMode = localStorage.getItem('siteMode') || 'light';
    const currentIndex = modeOrder.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % modeOrder.length;
    const nextMode = modeOrder[nextIndex];
    setMode(nextMode);
  }

  // 为模式按钮添加点击事件
  if (navModeButton) {
    navModeButton.addEventListener('click', cycleMode);
  }
  
  if (sidebarModeButton) {
    sidebarModeButton.addEventListener('click', cycleMode);
  }

  // 初始化加载保存的模式
  loadSavedMode();
}
/**
 * 工具函数模块
 */

// 检查元素是否存在
export function exists(element) {
  return element !== null && element !== undefined;
}

// 从localStorage获取数据
export function getFromLocalStorage(key, defaultValue) {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return defaultValue;
  }
}

// 保存数据到localStorage
export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

// 延迟函数
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 检查是否是站内链接
export function isInternalLink(url) {
  return url.startsWith(window.location.origin);
}
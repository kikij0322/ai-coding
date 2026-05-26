// 🍰 甜品屋 localStorage 读写封装

const PREFIX = "dessert_";

export function getHighScore(gameKey) {
  try {
    const val = localStorage.getItem(PREFIX + gameKey + "_high");
    return val ? parseInt(val, 10) : 0;
  } catch (_) {
    return 0;
  }
}

export function setHighScore(gameKey, score) {
  try {
    const current = getHighScore(gameKey);
    if (score > current) {
      localStorage.setItem(PREFIX + gameKey + "_high", String(score));
      return true; // new record
    }
    return false;
  } catch (_) {
    return false;
  }
}

export function getProgress(gameKey) {
  try {
    const val = localStorage.getItem(PREFIX + gameKey + "_progress");
    return val ? parseInt(val, 10) : 0;
  } catch (_) {
    return 0;
  }
}

export function setProgress(gameKey, value) {
  try {
    localStorage.setItem(PREFIX + gameKey + "_progress", String(value));
  } catch (_) { /* ignore */ }
}

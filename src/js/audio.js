// 🍰 甜品屋公共音效工具 —— Web Audio API 合成

let audioCtx = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(freq, duration, type = "sine", gain = 0.3, ramp = true) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const vol = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    vol.gain.setValueAtTime(gain, ctx.currentTime);
    if (ramp) {
      vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    }
    osc.connect(vol);
    vol.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (_) { /* audio not available */ }
}

export function playMatch() {
  playTone(660, 0.12, "sine", 0.25);
  setTimeout(() => playTone(880, 0.15, "sine", 0.25), 80);
}

export function playFail() {
  playTone(200, 0.15, "square", 0.15);
  setTimeout(() => playTone(160, 0.2, "square", 0.12), 100);
}

export function playCombo(level) {
  const base = 520 + level * 80;
  playTone(base, 0.1, "sine", 0.2);
  setTimeout(() => playTone(base + 130, 0.1, "sine", 0.2), 60);
  if (level >= 3) {
    setTimeout(() => playTone(base + 260, 0.15, "sine", 0.25), 120);
  }
}

export function playLevelUp() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((n, i) => {
    setTimeout(() => playTone(n, 0.2, "sine", 0.25), i * 120);
  });
}

export function playClick() {
  playTone(800, 0.05, "sine", 0.15, false);
}

export function playTick() {
  playTone(1000, 0.03, "sine", 0.1, false);
}

export function resumeAudio() {
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

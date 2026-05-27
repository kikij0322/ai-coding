# 🍰 甜品屋小游戏合集

五款可爱甜品主题的网页小游戏，基于 Vite 构建，一键部署。

## 🎮 游戏列表

| 游戏 | 描述 |
|---|---|
| 🍬 糖果贪吃蛇 | 经典贪吃蛇，马卡龙色蛇身，吃掉糖果越长越长 |
| 🍩 甜甜圈连连看 | 五关递增，找出相同甜点连线消除，带连击和音效 |
| 🍫 巧克力扫雷 | 三档难度，避开巧克力炸弹，长按插旗 |
| 🍦 冰淇淋 2048 | 合并数字冲向 2048，每级冰淇淋配色 |
| 🍮 布丁方块 | 经典俄罗斯方块，马卡龙色果冻质感 |

## 🚀 运行

```bash
npm install
npm run dev      # 本地开发 → http://localhost:5173
npm run build    # 生产构建 → dist/
npm run preview  # 预览构建结果
```

## 📦 部署

构建后 `dist/` 文件夹可直接部署到任意静态托管：

- **GitHub Pages**：推送后自动部署（已配置 `.github/workflows/deploy.yml`）
- **Netlify**：拖拽 `dist/` 文件夹即可
- **Vercel**：导入仓库自动检测 Vite 项目

## 🛠 技术栈

- Vite 5 + 原生 HTML/CSS/JS
- 多页应用（6 个入口）
- Canvas 渲染游戏画面
- Web Audio API 合成音效
- localStorage 存储最高分
- 响应式设计，支持桌面和手机

## 📁 项目结构

```
├── index.html              # 甜品屋大厅
├── snake.html              # 糖果贪吃蛇
├── link-match.html         # 甜甜圈连连看
├── minesweeper.html        # 巧克力扫雷
├── 2048.html               # 冰淇淋 2048
├── tetris.html             # 布丁方块
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── styles/
    │   └── shared.css      # 公共设计系统
    └── js/
        ├── storage.js       # localStorage 封装
        └── audio.js         # 音效工具
```

import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        snake: resolve(__dirname, "snake.html"),
        "link-match": resolve(__dirname, "link-match.html"),
        minesweeper: resolve(__dirname, "minesweeper.html"),
        "2048": resolve(__dirname, "2048.html"),
        tetris: resolve(__dirname, "tetris.html"),
      },
    },
  },
});

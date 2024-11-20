import { defineConfig } from "umi";

export default defineConfig({
  base: '/dawn',
  history: { type: 'memory' },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});

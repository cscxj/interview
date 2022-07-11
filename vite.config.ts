import { resolve } from "path";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@/": resolve(__dirname, "./vitepress/theme") + "/",
    },
  },
  plugins: [
    Components({
      dirs: [".vitepress/theme/components"],
      extensions: ["vue", "ts"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
    }),
    WindiCSS(),
  ],
});

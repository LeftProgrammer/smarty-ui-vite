/// <reference types="vitest" />

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";

const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
      assetFileNames: `assets/[name].css`
      // globals: {
      //   vue: "Vue",
      // },
    },
  };

export default defineConfig({
    plugins: [
        vue(),
        vueJsx({}),
        Unocss()
    ],
    test: {
      globals: true,
      environment: 'happy-dom',
      transformMode: {
        web: [/.[tj]sx$/]
      }
    },

    build: {
        rollupOptions,
        minify:false,
        lib: {
          entry: "./src/entry.ts",
          name: "SmartyUI",
          fileName: "smarty-ui",
          // 导出模块格式
          formats: ["esm", "umd","iife"],
        },
        cssCodeSplit: true
      },
});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      'vue-router': 'vue-router/dist/vue-router.esm-bundler.js',
    },
  },
});

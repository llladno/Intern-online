// vite.config.ts
import path from "node:path";
import vue from "file:///F:/projects/Intern-online/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///F:/projects/Intern-online/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import autoprefixer from "file:///F:/projects/Intern-online/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///F:/projects/Intern-online/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///F:/projects/Intern-online/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "F:\\projects\\Intern-online";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/base/variables.scss";`
      }
    }
  },
  base: "/Intern-online/",
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxwcm9qZWN0c1xcXFxJbnRlcm4tb25saW5lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxwcm9qZWN0c1xcXFxJbnRlcm4tb25saW5lXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9wcm9qZWN0cy9JbnRlcm4tb25saW5lL3ZpdGUuY29uZmlnLnRzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0Y3NzOiB7XHJcblx0XHRwb3N0Y3NzOiB7XHJcblx0XHRcdHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV1cclxuXHRcdH0sXHJcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcblx0XHRcdHNjc3M6IHtcclxuXHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL2Fzc2V0cy9iYXNlL3ZhcmlhYmxlcy5zY3NzXCI7YFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRiYXNlOiAnL0ludGVybi1vbmxpbmUvJyxcclxuXHRwbHVnaW5zOiBbXHJcblx0XHR2dWUoKSxcclxuXHRcdHZ1ZUpzeCgpXHJcblx0XSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcblx0XHR9XHJcblx0fVxyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsb0JBQW9CO0FBTjdCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLEtBQUs7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNSLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDckM7QUFBQSxJQUNBLHFCQUFxQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxRQUNMLGdCQUFnQjtBQUFBLE1BQ2pCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDckM7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

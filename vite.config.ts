
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
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
	base: '/Intern-online/',
	plugins: [
		vue(),
		vueJsx()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
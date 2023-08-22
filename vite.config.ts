import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  	plugins: [vue()],
	server: {
		port: 8080,
		host: true
	},
	resolve: {
		  alias: {
			  '@': fileURLToPath(new URL('./src', import.meta.url))
		  }
	}
});

import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from "vite-plugin-babel-macros";
import checker from "vite-plugin-checker";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
			typescript: true,
			terminal: true,
			overlay: {
				initialIsOpen: false,
				position: 'br'
			}
		}),
		macrosPlugin()
  ],
  resolve: {
    alias: {
      "@i18n": path.resolve(__dirname, "./src/i18n.ts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/App/components"),
      "@svgs": path.resolve(__dirname, "./src/assets/icons/svgs"),
      '@layout': path.resolve(__dirname, "./src/layout")
    }
  },
  preview: {
		port: 3000,
		open: true
	},
})

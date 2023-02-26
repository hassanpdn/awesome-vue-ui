import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
      build: {
            lib: {
                  entry: resolve(__dirname, "src/index.js"),
                  name: "vue-ui",
                  fileName: (format) => `vue-ui.${format}.js`
            },
            rollupOptions: {
                  external: ["vue"],
                  output: {
                        globals: {
                              vue: "Vue"
                        }
                  }
            }
      },
      plugins: [vue()],
      test: {
            globals: true,
            environment: "jsdom",
      },
      root: ".",
      resolve: {
            alias: {
                  '@': fileURLToPath(new URL('./src', import.meta.url))
            }
      },
      server: {
            port: 4000
      }
})

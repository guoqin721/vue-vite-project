// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'useResizeGuoqin',
      // the proper extensions will be added
      fileName: 'useResizeGuoqin',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD (require模式)构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          useResizeGuoqin: 'useResizeGuoqin',
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240, // 体积大于10k才进行压缩
      algorithm: 'gzip',  // 使用算法
      ext: '.gz'  // 生成的文件名后缀
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          echarts: ['echarts'],
          '@jiaminghi/data-view-react': ['@jiaminghi/data-view-react']
        }
      }
    }
  }
})

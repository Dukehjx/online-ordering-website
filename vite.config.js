import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    // Disable gzip reporting to prevent hanging
    reportCompressedSize: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize asset handling
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Improve chunking strategy
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});

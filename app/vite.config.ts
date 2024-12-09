/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(({mode}) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {
    root: __dirname,
    cacheDir: '../node_modules/.vite/app',
    server: {
      port: 4200,
      host: 'localhost',
      proxy: {
        "/api": {
          target: env.VITE_API_REAL_URL ?? "http://127.0.0.1:3000/api",
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(/^\/api/, "")
        }
      },
      cors: false
    },
    preview: {
      port: 4300,
      host: 'localhost',
      proxy: {
        "/api": {
          target: env.VITE_API_REAL_URL ?? "http://127.0.0.1:3000/api",
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(/^\/api/, "")
        }
      },
      cors: false
    },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
      outDir: '../dist/app',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }
});

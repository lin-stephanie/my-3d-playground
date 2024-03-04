import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // Note: When not using plugins, only esbuild is used for production builds, resulting in faster builds.
        plugins: [
          [
            // https://styled-components.com/docs/tooling#babel-plugin
            'babel-plugin-styled-components',
            {
              ssr: false,
              displayName: true,
              fileName: true,
              // If either fileName or displayName are set to false, this option has no effect.
              meaninglessFileNames: ['index'],
              minify: true,
              transpileTemplateLiterals: true,
              pure: true,
              // namespace: 'my-app',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.glb'],
})

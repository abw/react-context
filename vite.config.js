import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'

console.log('node.env', process.enc);


export default defineConfig(
  ({ command }) => ({
    plugins: [react()],
    publicDir: command === 'build' ? false : true,
    define,
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './test/setup.js',
      include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: ['test/setup.js', 'test/lib']
    },
    build: {
      minify: true,
      sourcemap: false,
      lib: {
        entry: 'lib/index.js',
        name: '@abw/react-context',
        fileName: 'react-context',
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime'
        ],
        output: {
          globals: {
            'react': 'react',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime'
          },
        },
      },
    }
  })
)

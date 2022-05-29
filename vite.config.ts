import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import reactJsx from 'vite-react-jsx';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({ targets: ['defaults', 'not IE 11'] }),
    reactJsx(),
    reactRefresh(),
    reactSvgPlugin(),
  ],
  server: {
    open: true,
  }
})

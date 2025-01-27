import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://vite.dev/config/shared-options.html#envdir
  // so i only have one centralized .env file hehe ^ ^
  envDir: '../',
  server: {
    host: '0.0.0.0',
  },
});

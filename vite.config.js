import { defineConfig } from 'vite';

/**
 * ==============================================================================
 * VITE CONFIGURATION - EduPulse Student Management System
 * ==============================================================================
 * Author : Dnyandev
 * Purpose: Lightning-fast Vite dev server and Rollup production bundler.
 * ==============================================================================
 */
export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist'
  }
});

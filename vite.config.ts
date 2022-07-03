import react from '@vitejs/plugin-react';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
      shortcuts: {
        'flex-center': 'flex justify-center items-center',
        btn: 'active:op-20 transition-200 py-6 px-12 font-semibold text-10 rounded-xl shadow-lg shadow-green-500/50 text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer',
      },
    }),
  ],
});

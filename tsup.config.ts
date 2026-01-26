import { defineConfig } from 'tsup';

export default defineConfig([
  // Main entry point
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom', '@tiptap/react', '@tiptap/starter-kit', '@tiptap/extension-link', '@tiptap/extension-underline'],
    treeshake: true,
    splitting: false,
    sourcemap: true,
    minify: false,
  },
  // Tailwind preset
  {
    entry: ['src/styles/tailwind-preset.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    outDir: 'dist',
    treeshake: true,
    splitting: false,
    sourcemap: true,
    minify: false,
  },
  // Rich text components (separate bundle with Tiptap deps)
  {
    entry: ['src/rich-text.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    outDir: 'dist',
    external: ['react', 'react-dom', '@tiptap/react', '@tiptap/starter-kit', '@tiptap/extension-link', '@tiptap/extension-underline'],
    treeshake: true,
    splitting: false,
    sourcemap: true,
    minify: false,
  },
]);

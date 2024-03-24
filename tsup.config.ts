import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
    entryPoints: ['./src/use-ripple.ts'],
    format: ['cjs', 'esm'],
    sourcemap: true,
    external: ['react'],
    experimentalDts: true,
    metafile: true,
    ...options,
}));

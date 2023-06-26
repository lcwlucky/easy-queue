import typescript from 'rollup-plugin-typescript2';

const noDeclarationFiles = { compilerOptions: { declaration: false } };

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'es/index.js',
      format: 'esm',
    },
    plugins: [typescript({ useTsconfigDeclarationDir: true })],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
    },
    plugins: [typescript({ tsconfigOverride: noDeclarationFiles })],
  },
];

import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'hellowidget',
    file: 'dist/hello-widget.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: false
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    })
  ]
}
const vuePlugin = require('rollup-plugin-vue')

module.exports = {
  input: 'src/RTest.vue',
  output: {
    format: 'esm',
    dir: 'es',
    preserveModules: true
  },
  plugins: [
    vuePlugin()
  ],
  external: [
    'vue'
  ]
}
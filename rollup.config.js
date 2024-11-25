import { lezer } from '@lezer/generator/rollup'

function external
(id) {
  if ((id == 'tslib') || /^(\.?\/|\w:)/.test(id))
    return false
  return true
}

export default {
  input: 'src/index.js',
  external,
  output: [ { file: 'dist/index.cjs', format: 'cjs' },
            { dir: './dist', format: 'es' } ],
  plugins: [ lezer() ]
}

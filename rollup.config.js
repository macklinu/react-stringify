import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import sourceMaps from 'rollup-plugin-sourcemaps'
import uglify from 'rollup-plugin-uglify'

const createOutput = options => {
  return Object.assign(options, {
    name: 'ReactStringify',
    globals: {
      react: 'React',
    },
    sourcemap: true,
  })
}

export default {
  input: 'src/index.js',
  output: [
    createOutput({ file: 'dist/index.js', format: 'cjs' }),
    createOutput({ file: 'dist/index.es.js', format: 'es' }),
    createOutput({ file: 'dist/index.umd.js', format: 'umd' }),
  ],
  external: ['react'],
  plugins: [babel(), resolve(), commonjs(), sourceMaps(), filesize(), uglify()],
}

import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { svelte as viteSvelte } from '@sveltejs/vite-plugin-svelte'
import { ensureESMBuild } from '@fastify/vite'

const path = fileURLToPath(new URL(import.meta.url))
const root = resolve(dirname(path), 'client')

const plugins = [
  viteSvelte(),
  ensureESMBuild()
]

export default {
  root,
  plugins,
  build: {
    modulePreload: {
      polyfill: false
    },
    cssCodeSplit: false,
    cssMinify: false,
    minify: false
  }
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    transform(_code: string, id: string) {
      if (!id.endsWith('.md')) return null
      const raw = fs.readFileSync(id, 'utf-8')
      const { data, content } = matter(raw)
      const html = marked(content) as string
      return {
        code: `export const frontmatter = ${JSON.stringify(data)};\nexport const html = ${JSON.stringify(html)};`,
        map: null,
      }
    },
    handleHotUpdate({ file, server }: { file: string; server: any }) {
      if (file.endsWith('.md')) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    markdownPlugin(),
  ],
})

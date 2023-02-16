import fs from 'node:fs/promises'
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

const articles = await fs.readdir('./docs/blog/')

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./docs/blog/${article}`)

    const { data, _, path } = file

    return {
      ...data,
      path: path.replace(/\.md$/, '.html').replace('./docs', '.'),
    }
  })
)

await fs.writeFile('docs/blog_index.js', 'export default '+ JSON.stringify(data), 'utf-8')

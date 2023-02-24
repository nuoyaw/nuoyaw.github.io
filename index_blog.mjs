import fs from 'node:fs/promises'
import matter from 'gray-matter'

var articles = await fs.readdir('./docs/blog/')
articles = articles.filter((a) => a.endsWith('.md'))
articles.sort((a, b) => parseInt(b) - parseInt(a))

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

var json = {}
articles.forEach((a, idx) => json[parseInt(a)] = data[idx])

await fs.writeFile('docs/blog_index.js', 'export default '+ JSON.stringify(json), 'utf-8')

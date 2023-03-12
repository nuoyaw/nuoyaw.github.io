import fs from 'node:fs/promises'
import matter from 'gray-matter'

var articles = await fs.readdir('./docs/blog/pages/')
articles = articles.filter((a) => a.endsWith('.md'))
articles.sort((a, b) => parseInt(b) - parseInt(a))

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./docs/blog/pages/${article}`)

    const { data, _, path } = file

    return {
      ...data,
      path: path.replace(/\.md$/, '.html').replace('./docs', ''),
    }
  })
)

var json = []
articles.forEach((a, idx) => {
  if ((idx % 10) == 0) {
    json.push([])
  }
  json[json.length-1].push(data[idx])
})

await fs.writeFile('docs/blog/headings.js', 'export default '+ JSON.stringify(json), 'utf-8')

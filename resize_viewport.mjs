import fs from 'node:fs/promises'

var pages = await fs.readdir('./docs/.vitepress/dist')
pages = pages.filter(x => x.endsWith('.html'))

pages.map(async (page) => {
  let html = await fs.readFile(`./docs/.vitepress/dist/${page}`)
  html = html.toString().replace('width=device-width,initial-scale=1', 'width=600px')
  fs.writeFile(`./docs/.vitepress/dist/${page}`, html)
})

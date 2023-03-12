import headings from './blog/headings.js'

export default {
  paths() {
    let routes = [
      { params: { pkg: 'blog' }},
      { params: { pkg: 'education' }},
      { params: { pkg: 'experience' }},
      { params: { pkg: 'profile' }}
    ]
    
    for (var i = 2; i <= headings.length; i++) {
      routes.push({ params: { pkg: `blog/${i}`}})
    }

    return routes
  }
}
<template>
  <div v-if="isPage" class="mt-8">
    <div class="text-h4 font-weight-medium">{{ currentPage.title }}</div>
    <div class="text-button font-weight-light">{{ currentPage.date }}</div>
    <Content class="blog-content"/>
  </div>
  <div v-else class="mt-8" style="width:100%">
    <BlogItem v-for="entry in headings[idx-1]" :entry="entry" :isMobile="isMobile">
    </BlogItem>
    <v-pagination class="mt-4" v-if="headings.length > 1" v-model="idx" :length="headings.length"></v-pagination>
  </div>
</template>

<script>
import headings from '/blog/headings.js'
import { useRoute, useRouter } from 'vitepress'
import BlogItem from '../components/BlogItem.vue'

export default {  
  props: ['isMobile'],

  components: {BlogItem},

  setup() {
    const route = useRoute()
    const router = useRouter()
    
    return {
      route,
      router
    }
  },

  data() {
    return {
      headings: [],
      headingMap: {}
    }
  },

  computed: {
    idx: {
      get() {
        let path = this.route.path.toLowerCase().split('/')
        return path.length > 2 && path[2].length ? parseInt(path[2]) : 1 
      },
      set(i) {
        this.router.go(i === 1 ? '/blog.html' : `/blog/${i}.html`)
      }
    },

    isPage() {
      return this.route.path.toLowerCase().split('/')[2] === 'pages'
    },

    currentPage() {
      return this.isPage ? this.headingMap[parseInt(this.route.path.split('/')[3])] : undefined
    }
  },

  created() {
    this.headings = headings
    var headingMap = {}

    headings.forEach(a => {
      a.forEach(b => {
        headingMap[parseInt(b['path'].split('/')[3])] = b
      })
    })

    this.headingMap = headingMap
  }
}
</script>

<style>
.header-anchor {
  visibility: hidden;
}

.blog-content p {
  margin-top: 1.5rem;
}
</style>
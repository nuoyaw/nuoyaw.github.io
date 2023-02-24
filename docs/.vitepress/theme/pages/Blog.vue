<template>
  <div v-if="isIndex" style="width:100%">
    <BlogItem v-for="(entry, key) in entries" :entry="entry" :isMobile="isMobile">
    </BlogItem>
  </div>
  <div v-else class="mt-8">
    <div class="text-h4">{{ selectedEntry.title }}</div>
    <div class="text-button font-weight-light">{{ selectedEntry.date }}</div>
    <Content class="blog-content"/>
  </div>
</template>

<script>
import index from '/blog_index.js'
import { useRoute } from 'vitepress'
import BlogItem from '../components/BlogItem.vue'

export default {  
  props: ['isMobile'],

  components: {BlogItem},

  setup() {
    const route = useRoute()

    return {
      route
    }
  },

  data() {
    return {
      entries: {}
    }
  },

  computed: {
    isIndex() {
      return this.route.path.split('/')[2] === undefined
    },

    selectedEntry() {
      return this.isIndex ? undefined : this.entries[this.route.path.split('/')[2].split('.')[0]]
    }
  },

  created() {
    this.entries = index
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
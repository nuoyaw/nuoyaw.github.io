<template>
  <div v-if="isIndex" style="width:100%">
    <BlogItem v-for="entry in entries" :entry="entry" :isMobile="isMobile">
    </BlogItem>
  </div>
  <Content v-else class="blog-content mt-8"/>
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
      entries: []
    }
  },

  computed: {
    isIndex() {
      return this.route.path.split('/')[2] === undefined
    }
  },

  mounted() {
    this.entries = index
  }
}
</script>

<style>
.header-anchor {
  visibility: hidden;
}

.timestamp {
  font-size: 1.5rem;
  font-weight: 300;
}

.blog-content p {
  margin-top: 2rem;
}
</style>
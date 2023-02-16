<template>
  <v-container v-if="isIndex">
    <v-row v-for="entry in entries" class="mt-8">
      <v-col class="text-h6 font-weight-light" cols=2><v-row align="center">{{ entry.date }}</v-row></v-col>
      <v-col>
        <v-row class="text-h5 font-weight-bold">
          <a :href="entry.path">{{ entry.title }}</a>
        </v-row>
        <v-row class="mt-8">{{ entry.description }}</v-row>
      </v-col>
    </v-row>
  </v-container>
  <Content v-else class="blog-content mt-8"/>
</template>

<script>
import index from '/blog_index.js'
import { useRoute } from 'vitepress'

export default {  
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
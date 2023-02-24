<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-container v-bind="props" class="blog-item" :class="isHovering ? 'highlighted' : ''" @click="onClick">
        <div class="mx-4 my-3">
          <v-row v-if="isMobile">
            <v-col>
              <v-row class="text-h5 font-weight-bold">{{ entry.title }}</v-row>
              <v-row class="text-button font-weight-light">{{ entry.date }}</v-row>
              <v-row class="mt-6">{{ entry.description }}</v-row>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col class="text-button font-weight-light" cols=2><v-row align="center" style="height:2rem">{{ entry.date }}</v-row></v-col>
            <v-col>
              <v-row class="text-h5 font-weight-bold">{{ entry.title }}</v-row>
              <v-row class="mt-6">{{ entry.description }}</v-row>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </template>
  </v-hover>
</template>

<script>
import { useRouter } from 'vitepress'
import { useTheme } from 'vuetify'

export default {
  props: ['entry', 'isMobile'],
  setup() {
    const router = useRouter()
    const theme = useTheme()
    
    return {
      router,
      theme
    }
  },

  methods: {
    onClick(e) {
      e.stopPropagation()
      this.router.go(this.entry.path)
    }
  }
}
</script>

<style>
.blog-item {
  border-radius: 0.5em;
  cursor: pointer;
}

.blog-item.highlighted {
  background-color: #69696920;
}
</style>
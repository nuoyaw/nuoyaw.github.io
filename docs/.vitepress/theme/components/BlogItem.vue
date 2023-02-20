<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-container v-bind="props" class="blog-item" :style="isHovering ? 'background-color:gray;' : ''">
        <v-row class="mx-2 my-1">
          <v-col class="text-h6 font-weight-light" cols=2><v-row align="center">{{ entry.date }}</v-row></v-col>
          <v-col>
            <v-row class="text-h5 font-weight-bold">
              <a :href="entry.path">{{ entry.title }}</a>
            </v-row>
            <v-row class="mt-8">{{ entry.description }}</v-row>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: ['entry', 'isMobile']
}
</script>

<style>
.blog-item {
  border-radius: 0.5em;
}
</style>
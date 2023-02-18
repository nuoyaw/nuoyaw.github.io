<template>
  <v-container style="height: 100%; max-width: 600px; max-height:800px; margin: 0 auto;">
    <v-row style="height: 100%" align="center">
      <v-col>
        <v-row justify="center" class="mb-16">
          <v-avatar size="160">
            <v-img src="/me.jpeg"></v-img>
          </v-avatar>
        </v-row>
        <v-row v-for="para in bio" justify="center" class="my-8">
          <div>{{ para }}</div>
        </v-row>
        <v-row justify="center" class="mt-16">
          <a v-for="link in links" :href="link.url">
            <v-icon :icon="link.icon" class="profile-link mx-7" :class="themeClass" size="x-large"></v-icon>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup() {
    const theme = useTheme()

    return {
      theme
    }
  },

  data() {
    return {
      links: [
        { url: "javascript:location='mailto:\u006e\u006f\u0061\u0068\u0040\u006e\u006f\u0061\u0068\u0073\u002e\u0061\u0069';void 0", icon: 'mdi-at' },
        { url: 'https://www.linkedin.com/in/nuoyaw/', icon: 'mdi-linkedin' },
        { url: 'https://twitter.com/noahs_ai', icon: 'mdi-twitter'},
        { url: 'https://github.com/nuoyaw', icon: 'mdi-github'}
      ],

      bio: [
        "Hi, I'm Nuoya (Noah) Wang. I'm a Machine Learning Engineer with a strong belief in the potential that AI can unlock for humanity. I enjoy applying state-of-the-art research to create solutions for real-world problems. Additionally, my 5+ years of prior experience as a Software Engineer make me a great jack-of-all-trades. I'm equally adept whether it comes to optimising C++ code for deployment, or conducting groundbreaking research in an unexplored domain.",
        "Outside of my career, I'm also a maker, a tinkerer, and a lover of all things tech. My interests include art, computers, cars, and motorsports. I have a great DIY spirit, and am constantly seeking to learn new things and improve myself."
      ]
    }
  },
  computed: {
    darkMode() {
      return this.theme.global.current.value.dark
    },
    themeClass() {
      return this.darkMode ? 'dark-theme' : 'light-theme'
    }
  }
}
</script>

<style>
.profile-link.dark-theme {
  color: whitesmoke
}
.profile-link.light-theme {
  color: darkslategray
}
</style>

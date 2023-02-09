<template>
  <v-container style="height: 100%; max-width: 600px; max-height:800px; margin: 0 auto;">
    <v-row style="height: 100%" align="center">
      <v-col>
        <v-row justify="center">
          <v-avatar size="160" color="grey" >temp</v-avatar>
        </v-row>
        <v-row justify="center" >
          <div class="my-16">
            I am a machine learning engineer
          </div>
        </v-row>
        <v-row justify="center">
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

<template>
  <v-app>
    <v-layout>
      <v-app-bar :height=convertRemToPixels(6)>
        <div class="d-flex justify-center fill-height" id="test1" style="position:relative;width:100%">
          <div class="appbar-text link-select" :class="themeClass" id="name" :style="selectStyle">
            Noah's
            <div class="select-border" :class="themeClass" :style="borderStyle"></div>
          </div>
          <span v-for="(v, k, i) in routes" :key="k" style="align-self: flex-end; padding-bottom: 0.75rem;">
            <a class="appbar-text link-option" :class="themeClass" :id="i" :href="'/'+k+'.html'" @click="changePath(k, $event)">{{ v }}</a> 
          </span>
        </div>
        <v-btn :icon="darkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" color="grey" variant="outlined" style="position:fixed;right:0.5em" @click="toggleTheme">
        </v-btn>
      </v-app-bar>
      <v-main>
        <Content />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { useRoute, useRouter } from 'vitepress'
import { useTheme } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default {
  data() {
    return {
      animate: false,
      nameWidth: null,
      selectOffset: 0,
      borderWidth: null,
      borderOffset: 0.75,
      routes: {
        profile: 'Profile',
        blog: 'Blog',
        projects: 'Projects',
        resume: 'Resume'
      }
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const theme = useTheme()

    return {
      route,
      router,
      theme
    }
  },
  watch: {
    path() {
      this.setSelectionPosition(true)
    },
    displayWidth() {
      this.setInitialSelection()
    },
    displayHeight() {
      this.setInitialSelection()
    }
  },
  computed: {
    displayHeight() {
      return this.$vuetify.display.height
    },
    displayWidth() {
      return this.$vuetify.display.width
    },

    selectStyle() {
      let style = {}

      style.left = this.selectOffset + 'px'

      if (this.animate) {
        style.transition = 'all 0.5s ease'
      }
      return style
    },
    borderStyle() {
      let style = {width: this.borderWidth + 'px'}
      if (this.animate) {
        style.transition = 'all 0.5s ease'
      }
      return style
    },
    path() {
      return this.route.path
    },
    darkMode() {
      return this.theme.global.current.value.dark
    },
    themeClass() {
      return this.darkMode ? 'dark-theme' : 'light-theme'
    }
  },
  methods: {
    convertRemToPixels(rem) {    
      return rem * parseFloat(window.getComputedStyle(document.documentElement).fontSize); 
    },
    setInitialSelection() {
      this.$nextTick(() => this.setSelectionPosition(false))
    },
    setSelectionPosition(animate) {
      
      this.nameWidth = document.getElementById('name').offsetWidth
      let path = this.route.path.split('/')[1].split('.')[0]
      let index = Object.keys(this.routes).findIndex(k => k == path)

      if (index < 0) {
        this.router.go('/profile.html')
        index = 0
        animate = false
      }

      this.animate = animate
      let element = document.getElementById(index)

      this.selectOffset = element.offsetLeft 
      this.borderWidth = Math.max(this.nameWidth, element.offsetWidth)
      this.borderWidth += 2 * this.convertRemToPixels(this.borderOffset)
    },
    changePath(nextPath, e) {
      e.stopPropagation()
      this.router.go(`/${nextPath}.html`)
    },
    setTheme(userTheme) {
      localStorage.setItem('user-theme', userTheme);
      this.theme.global.name.value = userTheme
    },
    toggleTheme() {
      this.setTheme(this.darkMode ? 'light' : 'dark')
    },
  },
  mounted() {
    if (localStorage.getItem('user-theme') !== 'light' && localStorage.getItem('user-theme') !== 'dark') {
      this.setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } else {
      this.setTheme(localStorage.getItem('user-theme'))

    }

    document.fonts.ready.then(() => this.setInitialSelection())
  },
}
</script>

<style>
  @font-face {
    font-family: "Oswald";
    src: local("Oswald"), url(./fonts/Oswald/static/Oswald-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "Edingu";
    src: local("Edingu"), url(./fonts/Edingu/Ed.ttf) format("truetype");
  }

  .select-border {
    border-style: solid;
    border-radius: 0.6rem;
    border-width: 0.24rem !important;
    position: absolute;
    margin-top: -0.5rem;
    height: 5.5rem;
    top:0;
    left: -0.75rem;
    z-index: -1;
  }

  .select-border.light-theme {
    border-color: #c43e00;
  }

  .select-border.dark-theme {
    border-color: #ffa040;
  }

  .link-select {
    position: absolute;
    margin-top: 0.75rem;
  }

  .link-select.light-theme {
    color: #c43e00;
  }

  .link-select.dark-theme {
    color: #ffa040;
  }

  .link-option {
    margin: 0 1.25rem;
  }

  .link-option.light-theme {
    color: darkslategray;
  }

  .link-option.dark-theme {
    color: whitesmoke;
  }

  .appbar-text {
    font-size: 2rem !important;
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    
    letter-spacing: normal !important;
    font-family: "Oswald" !important;
    text-transform: none !important;
    line-height:1!important;
    padding-bottom: 0.25rem;
  }
</style>

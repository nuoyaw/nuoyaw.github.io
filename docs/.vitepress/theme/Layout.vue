<template>
  <v-app>
    <v-layout>
      <v-app-bar :height=convertRemToPixels(6)>
        <div class="d-flex justify-center fill-height" id="test1" style="position:relative;width:100%">
          <div class="link-text link-select" id="name" style="margin-top:0.75rem;line-height:1!important;" :style="selectStyle">
            Noah's
            <div class="select-border" style="margin-top:-0.5rem;height:5.5rem;" :style="borderStyle"></div>
          </div>
          <span v-for="(v, k, i) in routes" :key="k" style="align-self: flex-end; padding-bottom: 0.75rem;">
            <span class="link-text link-option" :id="i" @click="changePath(k)">{{ v }}</span> 
          </span>
        </div>
      </v-app-bar>
      <v-main>
        <Content />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { useRoute, useRouter } from 'vitepress'

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
        resume: 'Resume'
      }
    }
  },
  setup() {
    let route = useRoute()
    let router = useRouter()
    return {
      route,
      router
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

      style.left = this.selectOffset + "px"

      if (this.animate) {
        style.transition = "all 0.5s ease"
      }
      return style
    },
    borderStyle() {
      let style = {width: this.borderWidth + "px"}
      if (this.animate) {
        style.transition = "all 0.5s ease"
      }
      return style
    },
    path() {
      return this.route.path
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
      
      this.nameWidth = document.getElementById("name").offsetWidth
      let path = this.route.path.split('/')[1].split('.')[0]
      let index = Object.keys(this.routes).findIndex(k => k == path)

      if (index < 0) {
        this.router.go('/profile.html')
        return
      }

      this.animate = animate
      let element = document.getElementById(index)

      this.selectOffset = element.offsetLeft 
      this.borderWidth = Math.max(this.nameWidth, element.offsetWidth)
      this.borderWidth += 2 * this.convertRemToPixels(this.borderOffset)
    },
    changePath(nextPath) {
      this.router.go(`/${nextPath}.html`)
    }
  },
  mounted() {
    // this.setInitialSelection()
    document.fonts.ready.then(() => this.setSelectionPosition(true))
    // setTimeout(() => this.setInitialSelection(), 200)
  },
}
</script>

<style>
  @font-face {
    font-family: "Oswald";
    src: local("Oswald"), url(./fonts/Oswald/static/Oswald-Regular.ttf) format("truetype");
  }

  .select-border {
    border-style: solid;
    border-color: darkred !important;
    border-radius: 0.5rem;
    border-width: 0.25rem !important;
    position: absolute;
    top:0;
    left: -0.75rem;
    z-index: -1;
  }
  .link-select {
    position: absolute;
    color: darkred !important;
  }
  .link-option {
    line-height: 1 !important;
    margin: 0 1.25rem;
    cursor: pointer;
  }
  .link-text {
    font-size: 2rem !important;
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    color: darkslategray;
    letter-spacing: normal !important;
    font-family: "Oswald" !important;
    text-transform: none !important;
    padding-bottom: 0.25rem;
  }
</style>

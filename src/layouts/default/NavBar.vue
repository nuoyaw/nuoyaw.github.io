<template>
  <v-app-bar v-if="verticalLayout" :height=convertRemToPixels(6)>
    <div class="d-flex justify-center fill-height" id="test1" style="position:relative;width:100%">
      <div class="link-text link-select" id="name" style="margin-top:0.75rem;line-height:1!important;" :style="selectStyle">
        Noah's
        <div class="border" style="margin-top:-0.5rem;height:5.5rem;" :style="borderStyle"></div>
      </div>
      <span v-for="(v, k, i) in routes" :key="k" style="align-self: flex-end; padding-bottom: 0.75rem;">
        <router-link class="link-text vertical-link" :id="i" :to="'/'+k" >{{ v }}</router-link>
      </span>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-else permanent :width="convertRemToPixels(14)">
    <div class="d-flex align-center fill-height" style="position:relative">
      <div class="link-text link-select" id="name" style="right:7.5rem" :style="selectStyle">
        Noah's
        <div class="border" style="height: 100%;" :style="borderStyle"></div>
      </div>
      <div class="d-flex flex-wrap" style="margin-left:7rem;">
        <div v-for="(v, k, i) in routes" :key="k" style="width:100%">
          <router-link class="link-text horizontal-link" :id="i" :to="'/'+k" >{{ v }}</router-link>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
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
          resume: 'Resume',
          blog: 'Blog'
        }
      }
    },

    watch: {
      $route(to) {
        this.animate = true
        this.setSelectionPosition()
      },

      verticalLayout() {
        this.setInitialSelection()
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

      verticalLayout() {
        return this.displayHeight > this.displayWidth
      },     
      
      selectStyle() {
        let style = {}

        if (this.verticalLayout) {
          style.left = this.selectOffset + "px"
        } else {
          style.top = this.selectOffset + "px"
        }

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
      }
    },

    methods: {
      convertRemToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize); 
      },

      setInitialSelection() {
        this.animate = false
        this.$nextTick(() => this.setSelectionPosition())
      },

      setSelectionPosition() {
        this.nameWidth = document.getElementById("name").offsetWidth

        let route = this.$route.path.substring(1)
        let index = Object.keys(this.routes).findIndex(k => k == route)

        let element = document.getElementById(index)

        if (this.verticalLayout) {
          this.selectOffset = element.offsetLeft 
          this.borderWidth = Math.max(this.nameWidth, element.offsetWidth)
        } else {
          this.selectOffset = element.offsetTop
          this.borderWidth = this.nameWidth + element.offsetWidth + this.convertRemToPixels(0.5)
        }

        this.borderWidth += 2 * this.convertRemToPixels(this.borderOffset)
      }
    },

    mounted() {
      this.setInitialSelection()
      setTimeout(() => this.setInitialSelection(), 200)
    },
  }
</script>

<style>
  .border {
    border-color: darkred !important;
    border-radius: 0.5rem;
    border-width: 0.25rem !important;
    position: absolute;
    top:0;
    left: -0.75rem;
  }

  .link-select {
    position: absolute;
    color: darkred !important;
  }

  .horizontal-link {
    margin: 1rem 0;
  }

  .vertical-link {
    line-height: 1 !important;
    margin: 0 1rem;
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
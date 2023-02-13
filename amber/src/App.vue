<template>
  <v-app>
    <v-main>
      <div style="height:10999px">
        <span class="stateful text-h1" :style="translateStyle(currentState.welcome)">welcome to</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.noah)">noah</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.dot)">.</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.apos)">'</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.ai)">ai</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.ai_py)">ài</span>
        <span class="stateful cn text-h1" style="font-size: 5rem!important" :style="translateStyle(currentState.ai_cn)">的爱</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.es)">s</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.who)">who is</span>
        <span class="stateful cn text-h1" style="font-size: 5rem!important;" :style="translateStyle(currentState.who_cn)">谁是</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.question)">?</span>
        <v-img src="@/assets/amber.png" class="stateful" :style="translateStyle(currentState.image)" width="600px"></v-img>
        <span class="stateful text-h2" :style="translateStyle(currentState.when)" style="font-size: 4.5rem !important">When I look at you I see</span>
        <span class="stateful text-h2" :style="translateStyle(currentState.princess)" style="font-size: 4.5rem !important; width: 1000px">a beautiful princess</span>
        <span class="stateful text-h2" :style="translateStyle(currentState.business)" style="font-size: 4.5rem !important; width: 1000px">a strong businesswoman</span>
        <span class="stateful text-h2" :style="translateStyle(currentState.amber)" style="font-size: 4.5rem !important; width: 1000px">the amazing Amber</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.yaqi)" style="z-index:999">张雅淇</span>
        <span class="stateful text-h1" :style="translateStyle(currentState.love)" style="z-index:999">我爱你</span>
        <v-icon class="stateful" icon="mdi-heart" :style="translateStyle(currentState.heart)" style="color: red;" size="666px"></v-icon>
        <div v-if="targetStep !== steps-1">
          <span class="stateful text-h4" style="bottom: 60px" :style="'left:' + (midX - 90)+ 'px'" >Scroll down</span>
          <v-icon class="stateful" style="bottom: 10px;" :style="'left:' + (midX - 32)+ 'px'" icon="mdi-chevron-down" size="64px"></v-icon>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      stepSize: 1000,
      steps:10,
      targetStep: 0,
      currentStep: 0,
      transitioning: false,
      transitions: {
        welcome: {
          0: {
            x: -200,
            y: -150,
            opacity: 1
          },
          1: {
            x: -1000,
            opacity: 0
          }
        },
        noah: {
          0: {
            x: -122,
            y: -48,
            opacity: 1
          },
          4: {
            y: -296
          },
          5: {
            y: -492,
            opacity: 0
          },
        },
        dot: {
          0: {
            x: 130,
            y: -48,
            opacity: 1
          },
          1: {
            y:100,
            opacity:0
          }
        },
        apos: {
          0: {
            x: 82,
            y: -196,
            opacity: 0
          },
          1: {
            y: -48,
            opacity: 1
          },
          3: {
            y: 100,
            opacity: 0,
          }
        },

        es: {
          0: {
            x: 82,
            y: -48,
            opacity: 1
          },
          1: {
            x: 97,
            opacity: 1
          },
          3: {
            y: 100,
            opacity: 0,
          }
        },
        ai: {
          0: {
            x: 152,
            y: -48,
            opacity: 1
          },
          1: {
            x: 170,
          },
          2: {
            opacity: 0
          }
        },
        ai_py: {
          0: {
            x: 170,
            y: -48,
            opacity: 0
          },
          2: {
            opacity: 1,
          },
          3: {
            y: 100,
            opacity: 0,
          }
        },
        ai_cn: {
          0: {
            x: 90,
            y: -196,
            opacity: 0
          },
          3: {
            y: -48,
            opacity: 1,
          },
          4: {
            y: -296
          },
          5: {
            y: -492,
            opacity: 0
          },
        },

        who: {
          0: {
            x: -410,
            y: -48,
            opacity: 0
          },
          2: {
            opacity: 1
          },
          3: {
            y: -196,
            opacity: 0
          }
        },
        who_cn: {
          0: {
            x: -290,
            y: 100,
            opacity: 0
          },
          3: {
            y: -48,
            opacity: 1
          },
          4: {
            y: -296
          },
          5: {
            y: -492,
            opacity: 0
          },
        },
        question: {
          0: {
            x: 246,
            y: -48,
            opacity: 0
          },
          2: {
            opacity: 1
          },
          4: {
            y: -296
          },
          5: {
            y: -492,
            opacity: 0
          },
        },
        image: {
          0: {
            x: -300,
            y: 100,
            opacity: 0
          },
          4: {
            y: -148,
            opacity: 1
          },
          5: {
            y: -344,
          },
          8: {
            opacity: 0
          }
        },
        when: {
          0: {
            x: -365,
            y: 318,
            opacity: 0
          },
          5: {
            y: 124,
            opacity: 1
          },
          8: {
            opacity: 0
          }
        },
        princess: {
          0: {
            x: -301,
            y: 418,
            opacity: 0
          },
          5: {
            y: 224,
            opacity: 1
          },
          6: {
            x: -1201,
            opacity: 0
          }
        },
        business: {
          0: {
            x: 442,
            y: 224,
            opacity: 0
          },
          6: {
            x: -391,
            opacity: 1
          },
          7: {
            x: -1291,
            opacity: 0
          }
        },
        amber: {
          0: {
            x: 597,
            y: 224,
            opacity: 0
          },
          7: {
            x: -303,
            opacity: 1
          },
          8: {
            opacity: 0
          }
        },
        yaqi: {
          0: {
            x: -142,
            y: -130,
            opacity: 0
          },
          8: {
            opacity: 1
          }
        },
        love: {
          0: {
            x: -142,
            y: -6,
            opacity: 0
          },
          9: {
            opacity: 1
          }
        },
        heart: {
          0: {
            x: -333,
            y: -333,
            opacity: 0
          },
          9: {
            opacity: 1
          }
        }
      }
    }
  },

  computed: {
    displayX() {
      return this.$vuetify.display.width
    },
    displayY() {
      return this.$vuetify.display.height
    },
    midX() {
      return Math.floor(this.$vuetify.display.width / 2)
    },
    midY() {
      return Math.floor(this.$vuetify.display.height / 2)
    },
    allStates() {
      const transitionToState = transitions => {
        var res = [Object.assign({}, transitions[0])]
        for (let i = 1; i < this.steps; i++) {
          if (i in transitions) {
            let newState = Object.assign({}, res[res.length - 1])
            for (const [k,v] of Object.entries(transitions[i])) {
              newState[k] = v
            }

            res.push(newState)
          } else {
            res.push(Object.assign({}, res[res.length - 1]))
          }
        } 

        return res
      }

      return Object.fromEntries(Object.entries(this.transitions).map(([k,v],i) => [k, transitionToState(v)]))
    },
    currentState() {
      return Object.fromEntries(Object.entries(this.allStates).map(([k,v],i) => [k, v[this.currentStep]]))
    },
  },

  methods: {
    onScroll(e) {
      this.targetStep = Math.floor(window.top.scrollY / this.stepSize)
      if (!this.transitioning) {
        this.handleTransition()
      }
    },

    handleTransition() {
      if (this.currentStep !== this.targetStep) {
        if (this.targetStep > this.currentStep) {
          this.currentStep += 1
        } else {
          this.currentStep -= 1
        }
        this.transitioning = true
        setTimeout(() => this.handleTransition(), 1000)
      } else {
        this.transitioning = false
      }
    },

    translateStyle(style) {
      return {
        top: (style.y + this.midY) + 'px',
        left: (style.x + this.midX) + 'px',
        opacity: style.opacity
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
.stateful {
  position: fixed!important;
  transition: all 1s ease;
}

.cn {
  font-size: 5.5rem!important;
  font-weight: 200!important;
}

</style>
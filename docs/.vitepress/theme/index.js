import Layout from '../theme/Layout.vue'
// import router from '../theme/router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({components, directives});

export default {
  Layout,

  NotFound: () => '404',

  enhanceApp({ app }) {
    app.use(vuetify)
  },
}
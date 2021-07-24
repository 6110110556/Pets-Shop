// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/* Nomralize.css */
import "normalize.css"

/* Sass */
import "~/assets/sass/main.scss"

/* Gridsome Layouts */
import DefaultLayout from "~/layouts/Default.vue"

// // TODO: Find the solution (see here https://github.com/gridsome/gridsome/issues/882)
// /* GSAP & ScrollMagic */
// // import { TweenMax } from "gsap/TweenMax" // This seems to be unnecessary
// import ScrollMagic from "scrollmagic"
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"

// // Load ScrollMagic's Indicators only on development environment
// if (process.env.NODE_ENV === "development") {
//   require("imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators")
// }
// // Load any extra plugins from GreenSock like this:
// // import SplitText from "../static/SplitText"

// const GSAPScrollMagic = {
//   install(Vue, options) {
//     // GSAP
//     Vue.prototype.$GSAP = {
//       // TweenMax,
//       TimelineMax,
//       Linear,
//       Power1,
//       Power2,
//       Power3,
//       Back
//     }
//     // ScrollMagic
//     Vue.prototype.$ScrollMagic = {
//       Controller: new ScrollMagic.Controller(),
//       Scene: ScrollMagic.Scene
//     }
//   }
// }

/* FontAwesome 5 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
library.add(faGithub, faLinkedin, faArrowDown, faArrowRight)

/* Vuelidate */
import Vuelidate from "vuelidate"

import Vue from 'vue'
import { BootstrapVue, IconsPlugin, CardPlugin, TabsPlugin, NavbarPlugin, BTabs  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(TabsPlugin)
Vue.use(NavbarPlugin)
Vue.component('b-tabs', BTabs)
// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
// import { LayoutPlugin } from 'bootstrap-vue'
// Vue.use(LayoutPlugin)

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
// import { ModalPlugin } from 'bootstrap-vue'
// Vue.use(ModalPlugin)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
// import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

// This imports directive v-b-scrollspy as a plugin:
// import { VBScrollspyPlugin } from 'bootstrap-vue'
// Vue.use(VBScrollspyPlugin)

// This imports the dropdown and table plugins
// import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
// Vue.use(DropdownPlugin)
// Vue.use(TablePlugin)

/**
 * Export
 */
export default function(Vue, { router, head, isClient }) {
  // Global Head Metadata
  head.meta.push(
    {
      key: "author",
      name: "author",
      content: "Aref Mad-adam"
    },
    {
      key: "description",
      name: "description",
      content: "Assignment 3"
    },
    {
      key: "keywords",
      name: "keywords",
      content: "R, 6110110556"
    },
    { key: "robots", name: "robots", content: "index, follow, noodp, noydir" }
  )

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // // TODO: Find the solution (see here https://github.com/gridsome/gridsome/issues/882)
  // // Add GSAP & ScrollMagic to the project
  // Vue.use(GSAPScrollMagic)

  // Add FontAwesome 5 to the project
  Vue.component("font-awesome", FontAwesomeIcon)

  // Vuelidate
  Vue.use(Vuelidate)
}

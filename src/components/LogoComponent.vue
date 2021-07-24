<template>
  <g-link to="/" class="logo">
    <span class="sr-only">{{ desc }}</span>
    <component :is="showCorrectLogo"></component>
  </g-link>
</template>

<script>
import SvgTheLogo from "~/assets/img/svg/theLogo.svg"
import SvgTheLogoSimple from "~/assets/img/svg/theLogo--simple.svg"
import SvgTheLogoFullWhite from "~/assets/img/svg/theLogo--full--white.svg"

import SvgHandCat from "~/assets/img/icons/handcat.svg"
import SvgHandCatSimple from "~/assets/img/icons/handcat50.svg"
import SvgHandCatWhite from "~/assets/img/icons/handCatWhite.svg"

export default {
  components: {
    SvgTheLogo,
    SvgTheLogoSimple,
    SvgTheLogoFullWhite,
    SvgHandCat,
    SvgHandCatSimple,
    SvgHandCatWhite,
  },
  props: {
    version: {
      type: String,
      // default: "SvgTheLogo",
      default: "SvgHandCat",
    },
    desc: {
      type: String,
      required: true,
    },
  },
  computed: {
    showCorrectLogo() {
      let theLogo = this.version
      if (this.version === "simple") theLogo = "SvgTheLogoSimple"
      if (this.version === "fullWhite") theLogo = "SvgTheLogoFullWhite"
      // if (this.version === "simple") theLogo = "SvgHandCatSimple"
      // if (this.version === "fullWhite") theLogo = "SvgHandCatWhite"
      return theLogo
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  @extend %svg-color-change-hover;
  padding: 2px;
  line-height: 0;
  border-radius: 5px;
}
</style>



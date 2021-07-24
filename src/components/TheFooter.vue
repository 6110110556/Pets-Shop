<template>
  <footer class="footer" style="margin-top: 100px;">
    <div class="footer__inner container">
      <LogoComponent class="footer__logo" version="fullWhite" desc="Footer Logo" />

      <!-- <div class="footer__socialIcons">
        <SocialIcons parent-component="the Footer" />
      </div> -->

      <!-- <p class="footer__copyright"> -->
        <!-- &copy; {{ thisYear }}. -->
        <!-- <g-link to="/">HOME_PAGE_NAME</g-link> -->
        <!-- Youtube :
        <a href="https://www.youtube.com/channel/UCmLiSrat4HW2k07ahKEJo4w" target="_blank" rel="noopener noreferrer">
        &nbsp; <button style="font-size:16px" class="pointer" >click!</button>
        </a>
        &nbsp;&nbsp;Wiki :
        <a href="https://creamheroes.fandom.com/wiki/CreamHeroes_Wiki" target="_blank" rel="noopener noreferrer">
        &nbsp; <button style="font-size:16px" class="pointer" >click!</button>
        </a>  -->
      <!-- <!-- </p> -->
    </div>
  </footer>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue"
// import SocialIcons from "@/components/SocialIcons.vue"

export default {
  components: {
    LogoComponent,
    // SocialIcons
  },
  // data() {
  //   return {
  //     thisYear: new Date().getFullYear()
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.footer {
  @extend %skewBorderBeforeFlip;
  padding-top: 85px;
  display: flex;
  justify-content: center;
  color: $color-text-alt2;
  background-color: $color-body-bg-alt;

  &__logo {
    margin: 0 auto 17px;
    display: block;
    width: 160px;
  }

  &__copyright {
    text-align: center;

    a {
      color: $color-text-alt2;
      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>

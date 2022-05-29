<template>
  <NavbarLegalTermsStateless
    :isMobile="isMobile"
    :showNavbar="showNavbar"
    :buttons="buttons"
    :navigateToHome="navigateToHome"
    :setRouteSelected="setRouteSelected"
    :handleShowNavbar="handleShowNavbar"
  />
</template>

<script>
import NavbarLegalTermsStateless from './NavbarLegalTermsStateless.vue'

export default {
  name: 'NavbarLegalTerms',

  components: {
    NavbarLegalTermsStateless
  },

  data: () => ({
    isMobile: false,
    showNavbar: true,
    buttons: [
      {
        text: 'privacy_policy',
        active: false,
        route: '/privacy-policy'
      },
      {
        text: 'terms_conditions',
        active: false,
        route: '/terms-conditions'
      }
    ]
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
    this.showNavbar = !this.isMobile
    this.setRouteSelected(this.$route.path)
  },

  methods: {
    navigateToHome() {
      this.$router.push('/')
    },

    setRouteSelected(routeSelected) {
      this.buttons = this.buttons.map(button => {
        return {
          ...button,
          active: button.route === routeSelected ? true : false
        }
      })
      this.isMobile && this.handleShowNavbar()
    },

    handleShowNavbar() {
      this.showNavbar = !this.showNavbar
    }
  }
}
</script>
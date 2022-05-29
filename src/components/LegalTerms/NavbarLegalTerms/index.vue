<template>
  <NavbarLegalTermsStateless :navigateToHome="navigateToHome" />
</template>

<script>
import NavbarLegalTermsStateless from './NavbarLegalTermsStateless.vue'

export default {
  name: 'NavbarLegalTerms',

  components: {
    NavbarLegalTermsStateless
  },

  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>
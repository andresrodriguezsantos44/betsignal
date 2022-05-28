<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/privacy-policy">Policy Privacy</RouterLink>
    <RouterLink to="/terms-conditions">Terms Conditions</RouterLink>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarLegalTerms'
}
</script>
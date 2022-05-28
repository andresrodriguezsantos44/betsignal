<template>
  <h1>Legal Terms</h1>
  
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/privacy-policy">Policy Privacy</RouterLink>
    <RouterLink to="/terms-conditions">Terms Conditions</RouterLink>
  </nav>

  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

export default {
  name: 'LegalTermsLayout'
}
</script>
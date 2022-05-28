<template>
  <NavbarLegalTerms />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'

import NavbarLegalTerms from '../components/LegalTerms/NavbarLegalTerms/index.vue'

export default {
  name: 'LegalTermsLayout',
  components: {
    NavbarLegalTerms
  }
}
</script>
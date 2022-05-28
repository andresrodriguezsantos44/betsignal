<template>
  <nav>
    <RouterLink to="/legal-terms">Legal Terms</RouterLink>
    <LanguageSwitcher />
  </nav>
</template>

<script>
import { RouterView } from 'vue-router'

import LanguageSwitcher from '../../Global/LanguageSwitcher/index.vue'

export default {
  name: 'Navbar',
  components: {
    LanguageSwitcher
  }
}
</script>
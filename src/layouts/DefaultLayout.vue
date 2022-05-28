<template>
  <h1>Default</h1>

  <nav>
    <RouterLink to="/legal-terms">Legal Terms</RouterLink>
  </nav>

  <router-view></router-view>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'DefaultLayout'
}
</script>
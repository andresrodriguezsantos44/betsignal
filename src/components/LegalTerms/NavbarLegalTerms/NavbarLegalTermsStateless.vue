<template>
  <section class="navbar-legal-terms bg-primary py-4 px-2">
    <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo mb-4 cursor-pointer" @click="navigateToHome()" />

    <nav class="d-flex align-items-center justify-content-center flex-column">
      <RouterLink
        v-for="(button, i) in buttons"
        :key="i"
        :to="button.route"
        :class="button.active ? 'link-two link-two-active' : 'link-two'"
        @click="setRouteSelected(button.route)"
      >
        {{ button.text }}
      </RouterLink>
    </nav>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarLegalTerms',

  props: {
    navigateToHome: {
      type: Function,
      required: true
    }
  },

  data: () => ({
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

  mounted() {
    this.setRouteSelected(this.$route.path)
  },

  methods: {
    setRouteSelected(routeSelected) {
      this.buttons = this.buttons.map(button => {
        return {
          ...button,
          active: button.route === routeSelected ? true : false
        }
      })
    }
  }
}
</script>

<style lang="css">
.navbar-legal-terms {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15rem;
}
</style>
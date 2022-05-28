<template>
  <section class="px-4 py-2 d-flex align-items-center justify-content-between">
    <img v-if="!isMobile" src="../../../assets/images/logos/logo.png" alt="logo" class="logo" />

    <div v-else class="d-flex align-items-center justify-content-between full-width">
      <img src="../../../assets/icons/navbar/menu.svg" alt="icon-menu" class="icon-menu cursor-pointer" @click="handleShowNavbar()" />
      <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo" />
    </div>

    <nav v-if="showNavbar" :class="isMobile && 'navbar'">
      <div v-if="isMobile" class="d-flex align-items-center justify-content-between full-width p-4">
        <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo" />
        <img src="../../../assets/icons/navbar/close.svg" alt="icon-close" class="icon-close cursor-pointer" @click="handleShowNavbar()" />
      </div>

      <RouterLink @click="isMobile && handleShowNavbar()" :to="{ name: 'home', hash: '#whatDo' }" :class="`link ${ isMobile ? 'my-2' : 'mx-1' }`">{{ $t('home_navbar.what_we_do') }}</RouterLink>
      <RouterLink @click="isMobile && handleShowNavbar()" :to="{ name: 'home', hash: '#howWork' }" :class="`link ${ isMobile ? 'my-2' : 'mx-1' }`">{{ $t('home_navbar.how_does_it_work') }}</RouterLink>
      <RouterLink @click="isMobile && handleShowNavbar()" :to="{ name: 'home', hash: '#whyWe' }" :class="`link ${ isMobile ? 'my-2' : 'mx-1' }`">{{ $t('home_navbar.why_we') }}</RouterLink>
      <RouterLink @click="isMobile && handleShowNavbar()" :to="{ name: 'home', hash: '#payments' }" :class="`link ${ isMobile ? 'my-2' : 'mx-1' }`">{{ $t('home_navbar.payments') }}</RouterLink>
      <RouterLink @click="isMobile && handleShowNavbar()" to="/legal-terms" :class="`link ${ isMobile ? 'my-2' : 'mx-1' }`">{{ $t('home_navbar.contact_us') }}</RouterLink>
      
      <!-- <RouterLink to="/legal-terms">{{ $t('home_navbar.legal_terms') }}</RouterLink>
      <LanguageSwitcher /> -->
    </nav>
  </section>
</template>

<script>
import { RouterView } from 'vue-router'

import LanguageSwitcher from '../../Global/LanguageSwitcher/index.vue'

export default {
  name: 'NavbarStateless',

  components: {
    LanguageSwitcher
  },

  data: () => ({
    isMobile: true,
    showNavbar: true
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
    this.showNavbar = !this.isMobile
  },

  methods: {
    handleShowNavbar() {
      this.showNavbar = !this.showNavbar
    }
  }
}
</script>
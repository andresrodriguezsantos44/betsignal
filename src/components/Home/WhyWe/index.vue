<template>
  <WhyWeStateless :isMobile="isMobile" />
</template>

<script>
import WhyWeStateless from './WhyWeStateless.vue'

export default {
  name: 'WhatDo',

  components: {
    WhyWeStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>
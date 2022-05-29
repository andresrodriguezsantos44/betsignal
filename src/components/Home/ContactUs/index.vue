<template>
  <ContactUsStateless :isMobile="isMobile" />
</template>

<script>
import ContactUsStateless from './ContactUsStateless.vue'

export default {
  name: 'ContactUs',

  components: {
    ContactUsStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>
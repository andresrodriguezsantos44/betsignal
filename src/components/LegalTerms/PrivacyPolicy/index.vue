<template>
  <PrivacyPolicyStateless :isMobile="isMobile" />
</template>

<script>
import PrivacyPolicyStateless from './PrivacyPolicyStateless.vue'

export default {
  name: 'PrivacyPolicy',

  components: {
    PrivacyPolicyStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>
<template>
  <TermsConditionsStateless :isMobile="isMobile" />
</template>

<script>
import TermsConditionsStateless from './TermsConditionsStateless.vue'

export default {
  name: 'TermsConditions',

  components: {
    TermsConditionsStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>
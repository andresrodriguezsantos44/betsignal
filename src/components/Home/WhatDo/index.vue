<template>
  <WhatDoStateless :isMobile="isMobile" />
</template>

<script>
import WhatDoStateless from './WhatDoStateless.vue'

export default {
  name: 'WhatDo',

  components: {
    WhatDoStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>
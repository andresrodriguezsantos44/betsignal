<template>
  <RegisterTypeStateless :switchLanguage="switchLanguage" :currentType="currentType" />
</template>

<script>
import RegisterTypeStateless from './RegisterTypeStateless.vue'

export default {
  name: 'RegisterType',

  components: {
    RegisterTypeStateless
  },

  data: () => ({
    currentType: 'virtual'
  }),

  methods: {
    switchLanguage (e) {
      this.$store.dispatch('actionsSetType', e.target.value)
    }
  }
}
</script>
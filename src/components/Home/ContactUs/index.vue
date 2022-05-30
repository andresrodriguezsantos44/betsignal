<template>
  <ContactUsStateless
    :isMobile="isMobile"
    :handleEmail="handleEmail"
    :handleSubmit="handleSubmit"
  />
</template>

<script>
import ContactUsStateless from './ContactUsStateless.vue'

export default {
  name: 'ContactUs',

  components: {
    ContactUsStateless
  },

  data: () => ({
    isMobile: false,
    email: ''
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  },

  methods: {
    handleEmail(e) {
      this.email = e.target.value
    },

    handleSubmit(e) {
      e.preventDefault()
      console.log('email => ', this.email)
    }
  },
}
</script>
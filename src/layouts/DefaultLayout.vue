<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from '../components/Home/Navbar/index.vue'
import Footer from '../components/Home/Footer/index.vue'

export default {
  name: 'DefaultLayout',
  
  components: {
    Navbar,
    Footer
  }
}
</script>
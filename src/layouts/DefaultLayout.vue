<template>
  <div class="bg-primary">
    <div class="default-layout">
      <Navbar />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
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

<style>
.default-layout {
  width: 100%;
  margin: auto;
}

@media (min-width: 1024px) {
  .default-layout {
    width: 1024px;
    margin: auto;
  }
}
</style>
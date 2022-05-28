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

  background-image: url('../assets/images/background/bitcoin.png'), url('../assets/images/background/tether.png');
  background-repeat: no-repeat, no-repeat;
  background-size: 20rem, 20rem;
  background-position: 2% 4rem, 98% 45rem;
}

@media (min-width: 1024px) {
  .default-layout {
    width: 1024px;
    margin: auto;
  }
}
</style>
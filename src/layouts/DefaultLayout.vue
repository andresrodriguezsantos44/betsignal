<template>
  <div class="bg-primary">
    <div class="default-layout icons">
      <Navbar />
      <router-view></router-view>
    </div>
    <Footer />
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
  background-image: url('../assets/images/background/bitcoin.png'), url('../assets/images/background/tether.png'), url('../assets/images/background/bitcoin-2.png'), url('../assets/images/background/bc-1.png'), url('../assets/images/background/bc-2.png'), url('../assets/images/background/btc-small.png'), url('../assets/images/background/bc-2.png'), url('../assets/images/background/tether-small.png'), url('../assets/images/background/bc-1.png'), url('../assets/images/background/bc-2.png');
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 20rem, 20rem, 20rem, 6rem, 4rem, 4rem, 4rem, 4rem, 4rem, 3rem;
  background-position: 2% 4rem, 98% 45rem, 2% 70rem, 2% 60rem , 98% 77rem, 2% 135rem, 50% 130rem, 98% 140rem, 2% 170rem, 98% 180rem;
}

@media (min-width: 1024px) {
  .default-layout {
    width: 1024px;
    margin: auto;
  }
}
</style>
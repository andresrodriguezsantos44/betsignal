<template>
  <Banner />
  <WhatDo />
  <HowWork />
  <WhyWe />
  <Payments />
  <Testimonials />
  <Videos />
  <ContactUs />
</template>

<script>
import Banner from './Banner/index.vue'
import WhatDo from './WhatDo/index.vue'
import HowWork from './HowWork/index.vue'
import WhyWe from './WhyWe/index.vue'
import Payments from './Payments/index.vue'
import Testimonials from './Testimonials/index.vue'
import Videos from './Videos/index.vue'
import ContactUs from './ContactUs/index.vue'

export default {
  name: 'Home',

  components: {
    Banner,
    WhatDo,
    HowWork,
    WhyWe,
    Payments,
    Testimonials,
    Videos,
    ContactUs
  }
}
</script>
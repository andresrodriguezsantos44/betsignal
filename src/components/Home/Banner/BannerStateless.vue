<template>
  <section class="d-flex alignt-items-center justify-content-center p-4">
    <div :class="`d-flex alignt-items-center justify-content-center flex-column ${ isMobile ? 'full-width' : 'middle-width' }`">
      <h1 class="h1 text-left color-light mb-3">
        {{ $t('banner.title_one') }} <span class="h1 color-secondary">{{ $t('banner.title_two') }}</span> {{ $t('banner.title_three') }}
      </h1>
      <p class="h3 color-light mb-4">
        {{ $t('banner.text') }}
      </p>

      <div class="d-flex align-items-center justify-content-between mt-4">
        <img src="../../../assets/images/banner/binance.png" alt="binance" class="cripto-logo" />
        <img src="../../../assets/images/banner/tron.png" alt="tron" class="cripto-logo" />
        <img src="../../../assets/images/banner/tether.png" alt="tether" class="cripto-logo" />
      </div>
    </div>

    <img v-if="!isMobile" src="../../../assets/images/banner/world.png" alt="world" class="middle-width" />
  </section>
</template>

<script>
export default {
  name: 'BannerStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.cripto-logo {
  width: 8rem;
}

@media (max-width: 767px) {
  .cripto-logo {
    width: 6rem;
  }
}
</style>
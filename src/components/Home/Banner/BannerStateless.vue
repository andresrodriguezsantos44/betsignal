<template>
  <section class="banner-stateless d-flex alignt-items-center justify-content-center p-4">
    <div :class="`d-flex alignt-items-center justify-content-center flex-colum ${ isMobile ? 'full-width' : 'middle-width' }`">
      <h1 class="title text-left color-light mb-3">
        {{ $t('banner.title_one') }} <span class="title color-secondary">{{ $t('banner.title_two') }}</span> {{ $t('banner.title_three') }}
      </h1>
      <p class="subtitle color-light">
        {{ $t('banner.text') }}
      </p>
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
.banner-stateless {
  background-image: url('../../../assets/images/banner/bitcoin.png');
  background-repeat: no-repeat;
  background-size: 20rem;
  background-position: 2rem 1rem;
}
</style>
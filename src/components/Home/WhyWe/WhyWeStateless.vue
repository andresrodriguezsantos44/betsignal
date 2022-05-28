<template>
  <section class="d-flex align-items-center justify-content-between p-4">
    <div :class="`d-flex align-items-start justify-content-center flex-column ${ !isMobile && 'width-5' }`">
      <h2 class="h3 text-uppercase color-light underline-decoration pb-1 mb-4" id="whyWe">
        {{ $t('why_we.title') }}
      </h2>

      <p :class="`h2 color-light mb-4`">
        {{ $t('why_we.subtitle_one') }} <span class="h2 color-secondary">{{ $t('why_we.subtitle_two') }}</span>
      </p>

      <p :class="`p-regular color-light mb-4`">
        {{ $t('why_we.text') }}
      </p>

      <div class="d-flex align-items-center justify-content-center mb-2">
        <img src="../../../assets/icons/whyWe/star.svg" alt="star" class="why-we__star mr-1" />
        <p :class="`p-regular color-light`">
          {{ $t('why_we.item_one') }}
        </p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-2">
        <img src="../../../assets/icons/whyWe/star.svg" alt="star" class="why-we__star mr-1" />
        <p :class="`p-regular color-light`">
          {{ $t('why_we.item_two') }}
        </p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-2">
        <img src="../../../assets/icons/whyWe/star.svg" alt="star" class="why-we__star mr-1" />
        <p :class="`p-regular color-light`">
          {{ $t('why_we.item_three') }}
        </p>
      </div>
    </div>

    <img v-if="!isMobile" src="../../../assets/images/whyWe/phones.png" alt="phones" class="width-5" />
  </section>
</template>

<script>
export default {
  name: 'WhyWeStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.why-we__star {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
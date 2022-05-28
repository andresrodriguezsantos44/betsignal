<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <div :class="`p-4 d-flex align-items-center justify-content-between ${ isMobile && 'flex-column' } full-width mb-4`">
      <div class="what-do__card p-3 d-flex align-items-center justify-content-center flex-column">
        <h2 class="h1 color-light">300+</h2>
        <p class="p-regular color-light">{{ $t('what_do.card_one') }}</p>
      </div>

      <div class="what-do__card p-3 d-flex align-items-center justify-content-center flex-column">
        <h2 class="h1 color-light">30+</h2>
        <p class="p-regular color-light">{{ $t('what_do.card_two') }}</p>
      </div>

      <div class="what-do__card p-3 d-flex align-items-center justify-content-center flex-column">
        <h2 class="h1 color-light">200k+</h2>
        <p class="p-regular color-light">{{ $t('what_do.card_three') }}</p>
      </div>
    </div>

    <h2 class="h3 color-light underline-decoration pb-1 mb-4" id="whatDo">{{ $t('what_do.title') }}</h2>

    <p :class="`h2 color-light mb-4 text-center ${ isMobile ? 'full-width' : 'width-6' }`">
      {{ $t('what_do.subtitle_one') }} <span class="h2 color-secondary">{{ $t('what_do.subtitle_two') }}</span>
    </p>

    <p :class="`p-regular color-light text-center ${ isMobile ? 'full-width' : 'width-6' } mb-4`">
      {{ $t('what_do.text') }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'WhatDoStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.what-do__card {
  border: solid 1px white;
  border-radius: 1rem;
  width: 25%;
}

@media (max-width: 767px) {
  .what-do__card {
    width: 70%;
    margin-bottom: 1rem;
  }
}
</style>
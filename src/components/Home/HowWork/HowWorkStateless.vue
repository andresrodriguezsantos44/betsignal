<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h2 class="h3 text-uppercase color-light underline-decoration pb-1 mb-4" id="howWork">
      {{ $t('how_work.title') }}
    </h2>

    <p :class="`p-regular color-light text-center ${ isMobile ? 'full-width' : 'width-6' } mb-4`">
      {{ $t('how_work.text') }}
    </p>

    <div :class="`d-flex align-items-center justify-content-between ${ isMobile && 'flex-column' } full-width`">
      <div class="how-work__card d-flex align-items-center justify-content-center flex-column p-4">
        <h3 class="h3 color-light text-center mb-2">{{ $t('how_work.title_card_one') }}</h3>
        <img src="../../../assets/images/howWork/website.svg" alt="website" class="how-work__icon mb-2"/>
        <p class="p-regular color-light text-center">{{ $t('how_work.text_card_one') }}</p>
      </div>

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column p-4">
        <h3 class="h3 color-light text-center mb-2">{{ $t('how_work.title_card_two') }}</h3>
        <img src="../../../assets/images/howWork/signup.svg" alt="signup" class="how-work__icon mb-2"/>
        <p class="p-regular color-light text-center">{{ $t('how_work.text_card_two') }}</p>
      </div>

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column p-4">
        <h3 class="h3 color-light text-center mb-2">{{ $t('how_work.title_card_three') }}</h3>
        <img src="../../../assets/images/howWork/wallet.svg" alt="wallet" class="how-work__icon mb-2"/>
        <p class="p-regular color-light text-center">{{ $t('how_work.text_card_three') }}</p>
      </div>

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column p-4">
        <h3 class="h3 color-light text-center mb-2">{{ $t('how_work.title_card_four') }}</h3>
        <img src="../../../assets/images/howWork/criptos.svg" alt="criptos" class="how-work__icon mb-2"/>
        <p class="p-regular color-light text-center">{{ $t('how_work.text_card_four') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowWorkStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.how-work__card {
  background-color: rgba(255, 255, 255, 0.2);
  height: 300px;
  width: 24%;
  border-radius: 1rem;
}

.how-work__icon {
  height: 3rem;
  width: 8rem;
}

@media (max-width: 767px) {
  .how-work__card {
    width: 80%;
    margin-bottom: 1rem;
  }
}
</style>
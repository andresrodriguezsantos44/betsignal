<template>
  <section class="d-flex align-items-center flex-column">
    <img src="../../../assets/images/termsConditions/terms-conditions.png" alt="terms conditions" :class="`${ isMobile ? 'width-7' : 'width-5' } mb-4`" />
    <p class="h1 color-secondary text-center mb-4">{{ $t('terms_conditions.title') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('terms_conditions.text_one') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('terms_conditions.text_two') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('terms_conditions.text_three') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('terms_conditions.text_four') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('terms_conditions.text_five') }}</p>
  </section>
</template>

<script>
export default {
  name: 'TermsConditionsStateless',

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
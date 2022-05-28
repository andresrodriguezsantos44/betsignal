<template>
  <section class="d-flex align-items-center justify-content-between p-4">
    <img v-if="!isMobile" src="../../../assets/images/payments/payments.png" alt="payments" class="width-5" />

    <div :class="`d-flex align-items-start justify-content-center flex-column ${ !isMobile && 'width-5' }`">
      <h3 class="h3 text-uppercase color-light underline-decoration pb-1 mb-4" id="payments">
        {{ $t('payments.title') }}
      </h3>

      <h2 class="h2 color-light mb-1">
        {{ $t('payments.subtitle') }}
      </h2>
      <p :class="`p-regular color-light mb-3`">
        {{ $t('payments.text') }}
      </p>

      <h3 class="h3 color-secondary mb-1">
        {{ $t('payments.title_item_one') }}
      </h3>
      <p :class="`p-regular color-light mb-3`">
        {{ $t('payments.text_item_one') }}
      </p>

      <h3 class="h3 color-secondary mb-1">
        {{ $t('payments.title_item_two') }}
      </h3>
      <p :class="`p-regular color-light mb-3`">
        {{ $t('payments.text_item_two') }}
      </p>

      <h3 class="h3 color-secondary mb-1">
        {{ $t('payments.title_item_three') }}
      </h3>
      <p :class="`p-regular color-light mb-3`">
        {{ $t('payments.text_item_three') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaymentsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>
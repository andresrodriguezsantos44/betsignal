<template>
  <section class="d-flex align-items-center flex-column">
    <img src="../../../assets/images/privacyPolicy/privacy-policy.png" alt="privacy policy" class="width-5 mb-4" />
    <p class="h1 color-secondary mb-4">{{ $t('privacy_policy.title') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('privacy_policy.text_one') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('privacy_policy.text_two') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('privacy_policy.text_three') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('privacy_policy.text_four') }}</p>
    <p class="p-regular color-gray mb-2">{{ $t('privacy_policy.text_five') }}</p>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPolicyStateless',

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<template>
  <section class="d-flex align-items-start justify-content-start p-4">
    <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo mr-4" />

    <div :class="`d-flex align-items-start justify-content-center flex-column`">
      <h3 class="h3 text-uppercase color-light underline-decoration pb-1 mb-2" id="contact">
        {{ $t('contact.title') }}
      </h3>

      <div class="d-flex align-items-center justify-content-center mb-1">
        <img src="../../../assets/icons/contact/address.svg" alt="address" class="contact__icon-contact mr-1" />
        <p class="color-light">calle 89 no 85-25 av 117 sur</p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-1">
        <img src="../../../assets/icons/contact/email.svg" alt="email" class="contact__icon-contact mr-1" />
        <p class="color-light">calle 89 no 85-25 av 117 sur</p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-1">
        <img src="../../../assets/icons/contact/phone.svg" alt="phone" class="contact__icon-contact mr-1" />
        <p class="color-light">calle 89 no 85-25 av 117 sur</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.contact__icon-contact {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
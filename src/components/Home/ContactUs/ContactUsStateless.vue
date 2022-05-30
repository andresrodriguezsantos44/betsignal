<template>
  <section :class="`d-flex align-items-start ${ isMobile ? 'justify-content-center flex-column' : 'justify-content-between' } p-4`">
    
    <div class="d-flex align-items-start  justify-content-center mb-4 full-width">
      <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo mr-4" />

      <div :class="`d-flex align-items-start justify-content-center flex-column`">
        <h3 class="h3 text-uppercase color-light mb-2" id="contact">
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
    </div>

    <div class="d-flex align-items-center justify-content-center flex-column full-width mb-4">
      <RouterLink to="/legal-terms" class="link">{{ $t('home_navbar.legal_terms') }}</RouterLink>
    </div>

    <div class="d-flex align-items-center justify-content-center flex-column full-width">
      <h3 class="h3 text-uppercase color-light mb-2 full-width text-center" id="contact">
        {{ $t('contact.form_title') }}
      </h3>

      <form @submit="handleSubmit" class="contact__form full-width">
        <input type="email" :placeholder="$t('contact.input_placeholder')" @change="handleEmail" class="contact__input full-width p-1"/>
        <button type="submit" class="contact__button bg-secondary p-1">{{ $t('contact.button') }}</button>
      </form>
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
    },
    handleEmail: {
      type: Function,
      required: true
    },
    handleSubmit: {
      type: Function,
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

.contact__form {
  position: relative;
  border-radius: 1rem;
}

.contact__input {
  border-radius: 1rem;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  color: var(--light-color)
}

.contact__input::placeholder {
  color: var(--light-color)
}

.contact__input:focus {
  outline: solid 1px var(--secondary-color);
}

.contact__button {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 1rem;
  border: solid 1px var(--secondary-color);
  color: var(--light-color);
  cursor: pointer;
  text-transform: capitalize;
  font-family: Font-Medium;
}
</style>
<template>
  <div>
    <div>
      <LanguageSwitcher />
    </div>

    <div>
      {{ $t('home.title') }}
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

import LanguageSwitcher from '../Global/LanguageSwitcher/index.vue'

export default {
  name: 'Home',
  // setup() {
  //   const { t } = useI18n()
  //   return { t }
  // },
  components: {
    LanguageSwitcher
  }
}
</script>
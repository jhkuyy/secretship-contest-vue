import { createI18n as _createI18n } from 'vue-i18n'
import { Locale } from '../lib'

import en from '../locales/en.yaml'
import ru from '../locales/ru.yaml'

function createI18n() {
  return _createI18n({
    locale: Locale.EN,
    fallbackLocale: Locale.EN,
    messages: {
      en,
      ru,
    },
  })
}

export {
  createI18n,
  Locale,
}

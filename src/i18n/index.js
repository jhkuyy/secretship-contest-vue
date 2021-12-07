import { createI18n as _createI18n } from 'vue-i18n'
import { Locales } from './enums'
import en from './locales/en.yaml'
import ru from './locales/ru.yaml'

function createI18n() {
  return _createI18n({
    legacy: false,
    locale: Locales.EN,
    fallbackLocale: Locales.EN,
    messages: {
      en,
      ru,
    },
  })
}

export {
  createI18n,
  Locales,
}

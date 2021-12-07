<template>
  <div :class="$style.root">
    <img
      :src="imageIntro"
      :class="$style.media"
      alt="Intro image"
    >

    <h1>Telegram Ad Platform</h1>

    <p>
      Telegram provides a
      <strong>free and secure</strong>
      messaging service for more than
      <strong>500 million monthly active users</strong>
      around the world. In addition to sending private messages and chatting in private groups,
      Telegram users can subscribe to
      <a href="https://telegram.org/tour/channels">
        <strong>public one-to-many channels</strong>
      </a>.
    </p>

    <p>
      Every month, Telegram users generate over
      <strong>500 billion views</strong>
      in one-to-many channels.
    </p>

    <p>{{ t('page.welcome.title') }}</p>

    <AuthWidget
      telegram-bot-name="SecretshipContestVueBot"
      @auth="onAuth"
    />

    <LocaleSelector />
  </div>
</template>
<script>
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import imageIntro from '../assets/images/welcome/ads_intro.svg'
import { AuthWidget, LocaleSelector } from '../components'
import { useUser } from '../store'
import { Routes } from '../router'

export default defineComponent({
  components: {
    AuthWidget,
    LocaleSelector,
  },

  setup() {
    const store = useUser()
    const router = useRouter()
    const { t } = useI18n()
    const { isAuthorized } = storeToRefs(store)

    const onAuth = async (user) => {
      await store.login(user)
      await router.push({ name: Routes.APP_LIST })
    }

    return {
      isAuthorized,
      imageIntro,
      onAuth,
      t,
    }
  },

})
</script>

<style lang="stylus" module>
.root {
  width 100%;
  padding: 60px 15px 100px;
  max-width: 580px;
  margin 0 auto;
}

.media {
  display block;
  max-width 100%;
  margin 0 auto;
}
</style>

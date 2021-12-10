<template>
  <div :class="['container', $style.root]">
    <img
      src="../assets/images/welcome/ads_intro.svg"
      width="134"
      height="212"
      alt="intro"
    >

    <h1>{{ t('page.welcome.title1') }}</h1>

    <i18n-t
      keypath="page.welcome.p1.term"
      tag="p"
    >
      <template #t1>
        <strong>{{ t('page.welcome.p1.t1') }}</strong>
      </template>
      <template #t2>
        <strong>{{ t('page.welcome.p1.t2') }}</strong>
      </template>
      <template #t3>
        <a href="https://telegram.org/tour/channels">
          <strong>{{ t('page.welcome.p1.t3') }}</strong>
        </a>
      </template>
    </i18n-t>

    <i18n-t
      keypath="page.welcome.p2.term"
      tag="p"
    >
      <template #t1>
        <strong>{{ t('page.welcome.p2.t1') }}</strong>
      </template>
    </i18n-t>

    <AuthWidget
      size="large"
      telegramBotName="SecretshipContestVueBot"
      :class="$style.button"
      @auth="onAuth"
    />

    <div :class="$style.additionalInfo">
      <h3>{{ t('page.welcome.title2') }}</h3>

      <i18n-t
        keypath="page.welcome.p3.term"
        tag="p"
      >
        <template #t1>
          <strong>{{ t('page.welcome.p3.t1') }}</strong>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p3.t2') }}</strong>
        </template>
        <template #t3>
          <strong>{{ t('page.welcome.p3.t3') }}</strong>
        </template>
        <template #t4>
          <strong>{{ t('page.welcome.p3.t4') }}</strong>
        </template>
      </i18n-t>

      <i18n-t
        keypath="page.welcome.p4.term"
        tag="p"
      >
        <template #t1>
          <strong>{{ t('page.welcome.p4.t1') }}</strong>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p4.t2') }}</strong>
        </template>
      </i18n-t>

      <video
        :class="$style.sponsoredMessagesVideo"
        poster="../assets/sponsored-messages-poster.jpeg"
        src="../assets/sponsored-messages.mp4"
        autoplay
        loop
        playsinline
        controls
        muted
      />

      <h3>{{ t('page.welcome.title3') }}</h3>

      <i18n-t
        keypath="page.welcome.p5.term"
        tag="p"
      >
        <template #t1>
          <strong>{{ t('page.welcome.p5.t1') }}</strong>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p5.t2') }}</strong>
        </template>
        <template #t3>
          <strong>{{ t('page.welcome.p5.t3') }}</strong>
        </template>
        <template #t4>
          <strong>{{ t('page.welcome.p5.t4') }}</strong>
        </template>
      </i18n-t>

      <i18n-t
        keypath="page.welcome.p6.term"
        tag="p"
      >
        <template #t1>
          <strong>{{ t('page.welcome.p6.t1') }}</strong>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p6.t2') }}</strong>
        </template>
      </i18n-t>

      <h3>{{ t('page.welcome.title4') }}</h3>

      <i18n-t
        keypath="page.welcome.p7.term"
        tag="p"
      >
        <template #t1>
          <strong>{{ t('page.welcome.p7.t1') }}</strong>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p7.t2') }}</strong>
        </template>
      </i18n-t>

      <h3>{{ t('page.welcome.title5') }}</h3>

      <p>{{ t('page.welcome.p8') }}</p>

      <h3>{{ t('page.welcome.title6') }}</h3>

      <i18n-t
        keypath="page.welcome.p9.term"
        tag="p"
      >
        <template #t1>
          <a href="https://promote.telegram.org/guidelines">{{ t('page.welcome.p9.t1') }}</a>
        </template>
        <template #t2>
          <strong>{{ t('page.welcome.p9.t2') }}</strong>
        </template>
        <template #t3>
          <strong>{{ t('page.welcome.p9.t3') }}</strong>
        </template>
        <template #t4>
          <a href="https://promote.telegram.org/getting-started">{{ t('page.welcome.p9.t4') }}</a>
        </template>
      </i18n-t>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { AuthWidget } from '../components'
import { useUser } from '../store'
import { Route } from '../lib'

export default defineComponent({
  components: {
    AuthWidget,
  },

  setup() {
    const store = useUser()
    const router = useRouter()
    const { t } = useI18n()
    const { isAuthorized } = storeToRefs(store)

    const onAuth = async (user) => {
      store.login(user)
      await router.push({ name: Route.APP_LIST })
    }

    return {
      isAuthorized,
      onAuth,
      t,
    }
  },
})
</script>

<style lang="stylus" module>
.root {
  margin: 0 auto
  text-align: center
  padding: 60px 15px 100px
  max-width: 580px

  h1 {
    margin-top: 10px
    margin-bottom: 21px
  }

  h3 {
    font-size: 16px
    line-height: 22px
    font-weight: 600
  }

  strong {
    font-weight: 500
  }

  p {
    font-size: 14px
    line-height: 21px
  }
}

.additionalInfo {
  text-align: start
  margin-top: 70px
}

.sponsoredMessagesVideo {
  max-width: 400px
  margin: 20px auto 20px
  display: block
  width: 100%
}

.button {
  width: 210px
  margin: 30px auto 12px
}
</style>

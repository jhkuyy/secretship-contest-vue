<template>
  <div :class="['container', $style.root]">
    <img
      src="../assets/images/ads_intro.svg"
      width="134"
      height="212"
    >

    <h1>Telegram Ad Platform</h1>

    <p>
      Telegram provides a <strong>free and secure</strong> messaging service for more than
      <strong>500 million monthly active users</strong>
      around the world. In addition to sending private messages and chatting
      in private groups, Telegram users can subscribe to
      <a href="https://telegram.org/tour/channels"><strong>public one-to-many channels</strong></a>.
    </p>

    <p>
      Every month, Telegram users generate over
      <strong>500 billion views</strong> in one-to-many channels.
    </p>

    <div :class="$style.additionalInfo">
      <h3>Advertising on Telegram</h3>

      <p>
        Sponsored messages on Telegram are displayed in
        <strong>large public one-to-many channels</strong>
        with <strong>1000+</strong> subscribers and are limited to
        <strong>160 characters</strong>. Sponsored Messages are based solely on the
        <strong>topic</strong> of the public channels in which they are shown.
      </p>

      <p>
        This means that <strong>no user data</strong>
        is mined or analyzed to display ads, and every user viewing a
        particular channel on Telegram sees <strong>the same sponsored messages</strong>.
      </p>

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

      <h3>Context-based advertising</h3>

      <p>
        Advertisers can choose the <strong>language</strong> and approximate
        <strong>topics</strong> of channels where their ads will be displayed.
        It is also possible to choose <strong>specific channels</strong>
        where a certain ad will be shown – or add specific channels where it will
        <em>not</em> be displayed.
      </p>

      <p>
        This allows advertisers to serve <strong>precise and efficient</strong>
        ads while <strong>preserving user privacy</strong>.
      </p>

      <h3>Privacy-conscious ads</h3>

      <p>
        Unlike other apps, Telegram <strong>doesn’t track or profile users</strong>
        based on their interactions with sponsored messages or other activities.
        We also <strong>prevent external links</strong> in sponsored messages
        to ensure that third parties can’t spy on our users. We believe that everyone
        has the right to privacy, and technological platforms should respect that.
      </p>

      <h3>Revenue sharing with channel owners</h3>

      <p>
        Sponsored Messages are currently in test mode. Once they are fully launched
        and allow Telegram to cover its basic costs, we will start sharing ad revenue
        with the owners of public channels in which sponsored messages are displayed.
      </p>

      <h3>Getting started</h3>

      <p>
        Telegram welcomes all responsible advertisers. Anyone can study Telegram's
        <a href="https://promote.telegram.org/guidelines">Ad Policies and Guidelines</a>,
        <strong>create an account</strong> on the Ad Platform and
        <strong>try out the interface</strong>. For a detailed overview of the platform, see
        <a href="https://promote.telegram.org/getting-started">this guide</a>.
      </p>
    </div>

    <button>Log In</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import imageIntro from '../assets/images/welcome/ads_intro.svg'
import { useUser } from '../store'
import { Route } from '../lib'

export default defineComponent({
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
      imageIntro,
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
    font-weight 500
  }

  p {
    font-size: 14px
    line-height: 21px
  }
}

.additionalInfo {
  text-align: start
}

.sponsoredMessagesVideo {
  max-width: 400px
  margin: 20px auto 20px
  display: block
  width: 100%
}
</style>

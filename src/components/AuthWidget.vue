<template>
  <div />
</template>

<script>
import { defineComponent } from 'vue'
import { useUser } from '../store'

export default defineComponent({
  props: {
    radius: {
      type: Number,
      default: 6,
    },
    requestAccess: {
      default: 'read',
      type: String,
      validator: (v) => ['read', 'write'].includes(v),
    },
    size: {
      default: 'medium',
      type: String,
      validator: (v) => ['large', 'medium', 'small'].includes(v),
    },
    showUserPicture: {
      type: Boolean,
      default: true,
    },
    telegramBotName: {
      type: String,
      required: true,
    },
  },

  setup() {
    const { login } = useUser()

    const onTelegramAuth = ({
      id,
      first_name: firstName,
      photo_url: photo,
      username,
    }) => {
      login({
        id,
        firstName,
        photo,
        username,
      })
    }

    return { onTelegramAuth }
  },

  mounted() {
    const tag = document.createElement('script')

    tag.async = true
    tag.src = 'https://telegram.org/js/telegram-widget.js?15'
    tag.setAttribute('data-size', this.size)
    tag.setAttribute('data-userpic', this.showUserPicture.toString())
    tag.setAttribute('data-telegram-login', this.telegramBotName)
    tag.setAttribute('data-request-access', this.requestAccess)
    tag.setAttribute('data-radius', this.radius.toString())
    tag.setAttribute('data-onauth', 'window.onTelegramAuth(user)')
    window.onTelegramAuth = this.onTelegramAuth

    this.$el.appendChild(tag)
  },
})
</script>

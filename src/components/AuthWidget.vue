<template>
  <div />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    radius: {
      type: Number,
      default: 6,
    },
    size: {
      default: 'medium',
      type: String,
      validator: (v) => ['large', 'medium', 'small'].includes(v),
    },
    telegramBotName: {
      type: String,
      required: true,
    },
  },

  emits: ['auth'],

  setup(_, { emit }) {
    const onTelegramAuth = ({
      id,
      first_name: firstName,
      photo_url: photo,
      username,
      hash,
    }) => {
      emit('auth', {
        id,
        firstName,
        photo,
        username,
        hash,
      })
    }

    return { onTelegramAuth }
  },

  mounted() {
    const tag = document.createElement('script')

    tag.async = true
    tag.src = 'https://telegram.org/js/telegram-widget.js?15'
    tag.setAttribute('data-size', this.size)
    tag.setAttribute('data-userpic', 'true')
    tag.setAttribute('data-request-access', 'read')
    tag.setAttribute('data-telegram-login', this.telegramBotName)
    tag.setAttribute('data-radius', this.radius.toString())
    tag.setAttribute('data-onauth', 'window.onTelegramAuth(user)')
    window.onTelegramAuth = this.onTelegramAuth

    this.$el.appendChild(tag)
  },
})
</script>

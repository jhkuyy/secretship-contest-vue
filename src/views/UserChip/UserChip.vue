<template>
  <div :class="$style.root">
    <Dropdown :class="$style.dropdown">
      <template #trigger>
        <div :class="[$style.user, 'd-none d-md-block']">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </template>

      <UserChipDropdownContent
        :menuItems="menuItems"
        :user="user"
      />
    </Dropdown>

    <Avatar :url="user.photo" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { Route } from '../../lib'
import { useUser } from '../../stores'
import Avatar from '../../components/Avatar.vue'
import Dropdown from '../../components/Dropdown.vue'

import UserChipDropdownContent from './UserChipDropdownContent.vue'

export default defineComponent({
  components: {
    Avatar,
    Dropdown,
    UserChipDropdownContent,
  },

  setup() {
    const store = useUser()
    const router = useRouter()
    const { t } = useI18n()
    const { user } = storeToRefs(store)

    const menuItems = computed(() => ([
      {
        action: () => router.push({ name: Route.PROFILE_EDIT }),
        icon: 'pencil',
        name: t('user_chip.menu.profile_edit'),
      },
      {
        action: () => router.push({ name: Route.HELP }),
        icon: 'help',
        name: t('user_chip.menu.help'),
      },
      {
        action: async () => {
          await router.push({ name: Route.WELCOME })
          store.logout()
        },
        icon: 'logout',
        name: t('user_chip.menu.logout'),
      },
    ]))

    return { menuItems, user }
  },
})
</script>

<style lang="stylus" module>
.root {
  display: flex
  align-items: center
}

.user {
  white-space: nowrap
  font-size 14px
  font-weight: 500
  color: darken($colors.primary, 15%)
  -webkit-font-smoothing: antialiased
}

.dropdown {
  margin-right: 18px
}
</style>

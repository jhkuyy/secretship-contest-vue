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
import { useUser } from '../../store'
import Avatar from '../Avatar.vue'
import Dropdown from '../Dropdown.vue'
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
        action: () => {
          store.logout()
          router.push({ name: Route.WELCOME })
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
  color: darken($colors.primary, 10%)
}

.dropdown {
  margin-right: 20px
}
</style>

<template>
  <div :class="$style.root">
    <Dropdown :class="$style.dropdown">
      <template #trigger>
        <div :class="$style.user">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </template>

      <Nav :items="menuItems">
        <template #default="{ item }">
          <span
            :class="$style.dropdownItem"
            @click="item.action"
          >
            <Icon
              :class="$style.icon"
              :name="item.icon"
              :size="24"
            />

            {{ item.name }}
          </span>
        </template>
      </Nav>
    </Dropdown>

    <Avatar :url="user.photo" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Avatar from './Avatar.vue'
import Dropdown from './Dropdown.vue'
import Icon from './Icon.vue'
import Nav from './Nav.vue'
import { useUser } from '../store'
import { Route } from '../lib'

export default defineComponent({
  components: {
    Avatar,
    Dropdown,
    Icon,
    Nav,
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
  display: none
  white-space: nowrap
  font-size 14px
  font-weight: 500
  color: darken($colors.primary, 10%)

  @media screen and (min-width: 992px) {
    display: block
  }
}

.icon {
  margin-right: 10px
}

.dropdown {
  margin-right: 20px
}

.dropdownItem {
  padding: 6px 15px
}
</style>

<template>
  <div :class="$style.root">
    <Dropdown :class="$style.dropdown">
      <template #trigger>
        <div :class="[$style.user, 'd-none d-md-block']">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </template>

      <UserChipDropdownContent />
    </Dropdown>

    <Avatar :url="user.photo" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
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

    const { user } = storeToRefs(store)

    return { user }
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

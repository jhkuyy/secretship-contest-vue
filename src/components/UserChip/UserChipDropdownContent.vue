<template>
  <div :class="$style.root">
    <div :class="[$style.header, 'd-md-none']">
      <Avatar
        :class="$style.avatar"
        :size="32"
        :url="user.photo"
      />

      <div class="overflow-hidden">
        <div :class="$style.name">
          {{ user.firstName }}
        </div>
        <div :class="$style.name">
          {{ user.lastName }}
        </div>
      </div>
    </div>

    <Nav :items="menuItems">
      <template #default="{ item }">
        <span
          :class="$style.item"
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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Avatar from '../Avatar.vue'
import Icon from '../Icon.vue'
import Nav from '../Nav.vue'

export default defineComponent({
  components: {
    Avatar,
    Icon,
    Nav,
  },

  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="stylus" module>
.root {
  max-width: 260px
}

.header {
  display: flex
  align-items: center
  // TODO: move color to vars
  border-bottom: 1px solid #e5e5e5
  line-height: 16px
  padding-bottom: 7.5px
  margin-bottom 7.5px
  padding-left: 9px
  padding-right: 9px
}

.item {
  padding: 6px 15px
  color: #000
}

.avatar {
  margin-right: 9px
}

.name {
  font-size: 14px
  font-weight: 600
  -webkit-font-smoothing: antialiased
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
}

.icon {
  margin-right: 10px
}
</style>

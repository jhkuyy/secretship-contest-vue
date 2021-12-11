<template>
  <div class="container mt-4">
    <div class="d-flex">
      <Tabs
        :active="activeTab"
        :items="tabs"
        @change="onTabChange"
      />

      <a
        v-if="button"
        :class="$style.button"
        @click="button.action"
      >
        {{ button.text }}
      </a>
    </div>

    <router-view />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { Tabs } from '../../../components'
import { Route } from '../../../lib'

export default defineComponent({
  components: {
    Tabs,
  },

  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const router = useRouter()

    const tabs = computed(() => ([
      { name: t('page.app_details.tabs.wallet'), route: Route.APP_DETAILS_WALLET },
      { name: t('page.app_details.tabs.users'), route: Route.APP_DETAILS_USERS },
      { name: t('page.app_details.tabs.settings'), route: Route.APP_DETAILS_SETTINGS },
    ]))

    const activeTab = computed(() => tabs.value.find((tab) => tab.route === route.name))

    const onTabChange = (tab) => router.push({ name: tab.route })

    const button = computed(() => {
      if (route.name === Route.APP_DETAILS_WALLET) {
        return {
          text: t('page.app_details.delete_button'),
          action: () => {},
        }
      }

      return null
    })

    return {
      activeTab,
      button,
      tabs,
      onTabChange,
    }
  },
})
</script>

<style lang="stylus" module>
.button {
  font-weight: 500
  cursor: pointer
  display: block
  margin-left: auto
  line-height: 30px

  &:hover,
  &:focus {
    text-decoration: underline
  }
}
</style>

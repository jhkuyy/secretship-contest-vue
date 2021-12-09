<template>
  <div class="container mt-3 p-0">
    <Tabs
      :active="activeTab"
      :items="tabs"
      @change="onTabChange"
    />
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

    return { activeTab, tabs, onTabChange }
  },
})
</script>

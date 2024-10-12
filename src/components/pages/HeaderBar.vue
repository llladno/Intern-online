<template>
  <header class="header">
    <router-link to="/">
      <icon-logo />
    </router-link>
    <div class="header__nav">
      <div class="header__nav-left">
        <router-link
          to="/organisation/cases"
          :class="[
            'p-16-400',
            'header__nav-link',
            activeRouteName === 'organisation-cases' && 'header__nav-link--active'
          ]"
        >
          <icon-my-case />
          <span>Мои кейсы</span></router-link
        >
        <router-link
          to="/cases"
          :class="[
            'p-16-400',
            'header__nav-link',
            activeRouteName === 'cases' && 'header__nav-link--active'
          ]"
        >
          <icon-all-case />
          <span>Все кейсы</span></router-link
        >
        <router-link to="/develop" class="p-16-400 header__nav-link"> Помощь</router-link>
      </div>
      <div class="header__nav-right">
        <i-o-button>+ Добавить</i-o-button>
        <div class="header__search">
          <i-o-input type="text" placeholder="Поиск" background="#fff" padding="33" />
          <icon-search />
        </div>
        <icon-notification />
        <dropdown-menu v-if="organisationData">
          <dropdown-menu-trigger @click="handleClick">
            <div class="header__profile">
              <img :src="ProfileImg" />
              <span> {{ organisationData.name }} </span>
              <icon-drop-down
                :class="[
                  'header__profile-dropdown',
                  actionDropDown && 'header__profile-dropdown--rotate'
                ]"
              />
            </div>
          </dropdown-menu-trigger>
          <dropdown-menu-content>
            <dropdown-menu-item
              v-for="item in actionsDropdownMenu"
              :key="item.id"
              class="font-medium cursor-pointer"
              @click="item.action"
            >
              <component :is="item.icon" class="mr-2" />
              {{ item.title }}
            </dropdown-menu-item>
          </dropdown-menu-content>
        </dropdown-menu>
        <button-component v-else @click="router.push('/login')"> Войти </button-component>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IOButton from '@/components/common/IOButton.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IOInput from '@/components/common/IOInput.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/shadcn/ui/dropdown-menu'
import IconProfile from '@/components/icons/IconProfile.vue'
import { type Component, onMounted, ref, watch } from 'vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import ProfileImg from '@/assets/media/img/profile.png'
import IconDropDown from '@/components/icons/IconDropDown.vue'
import IconAllCase from '@/components/icons/IconAllCase.vue'
import IconMyCase from '@/components/icons/IconMyCase.vue'
import { useRouter } from 'vue-router'
import { useOrganisationStore } from '@/stores/OrganistaionStore'
import ButtonComponent from '@/components/shadcn/ui/button/ButtonComponent.vue'

const actionDropDown = ref(false)
const router = useRouter()
const activeRouteName = ref()
const organisationStore = useOrganisationStore()
const organisationData = ref(null)

watch(router.currentRoute, () => {
  activeRouteName.value = router.currentRoute.value.name
})

watch(
  () => organisationStore.organisationProfile,
  () => {
    console.log('header bar Changed')
    organisationData.value = organisationStore.organisationProfile
  }
)

onMounted(() => {
  organisationData.value = organisationStore.organisationProfile
})
const actionsDropdownMenu: { id: string; title: string; icon: Component; action: () => void }[] = [
  {
    id: '1',
    title: 'Профиль компании',
    icon: IconProfile,
    action: () => router.push({ name: 'organisation-profile' })
  },
  {
    id: '2',
    title: 'Уведомления',
    icon: IconNotification,
    action: () => router.push('/')
  },
  {
    id: '3',
    title: 'Настройки',
    icon: IconSettings,
    action: () => router.push('/login')
  }
]

const handleClick = () => {
  actionDropDown.value = !actionDropDown.value
}
</script>

<style scoped lang="scss">
.header {
  height: 80px;
  padding: 20px 40px;

  &__search {
    position: relative;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 8px;
    border: $default-border;
    border-radius: 10px;
    padding: 4px;
    height: 40px;

    &-dropdown {
      margin: 0 14px 0 2px;
      transition: transform 0.3s ease;

      &--rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 40px;

    &-link {
      color: #525866;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 10px;
      transition: 0.3s ease;

      &--active {
        color: $default-black;
        background: #f5f7fa;

        * {
          fill: $primary-color;
        }
      }
    }

    &-left {
      margin-left: 52px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &-right {
      display: flex;
      align-items: center;
      gap: 29px;
    }
  }
}
</style>

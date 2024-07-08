<script setup lang="ts">
import { ref } from 'vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconLogout from '@/components/icons/IconLogout.vue'

const selectValue = ref(1)
const values = [
  { text: 'Мой профиль', icon: IconProfile, link: '/organization-profile' },
  { text: 'Мои кейсы', icon: IconFolder, link: '/my-cases' }
  // { text: 'Уведомления', icon: IconNotification, link: '/notifications' },
  // { text: 'Настройки', icon: IconSettings, link: '/settings' }
]

function selectLink(number: number) {
  selectValue.value = number
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__links">
      <RouterLink
        :to="value.link"
        v-for="(value, index) of values"
        @click="() => selectLink(index)"
        :class="[selectValue == index ? 'selected' : 'default']"
        :key="index"
      >
        <component :is="value.icon" :color="selectValue == index ? '#7862eb' : ''"></component>
        <span>{{ value.text }}</span>
      </RouterLink>
      <div class="sidebar__links-slider" :style="{ top: 40 * selectValue + 6 + 'px' }"></div>
    </div>
    <div class="sidebar__logout">
      <RouterLink to="/"> <IconLogout /> Выйти</RouterLink>
    </div>
  </aside>
</template>

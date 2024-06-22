<script setup lang="ts">
import { ref } from 'vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import IconSettings from '@/components/icons/IconSettings.vue'

const selectValue = ref(0)
const values = [{ text: 'Мой профиль', icon: IconProfile },
  { text: 'Мои кейсы', icon: IconFolder },
  { text: 'Уведомления', icon: IconNotification },
  { text: 'Настройки', icon: IconSettings }]

function selectLink(number: number) {
  selectValue.value = number
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__links">
      <div v-for="(value, index) of values" @click="()=> selectLink(index)" :class="[selectValue == index ? 'selected' : 'default']" :key="index">
        <component :is="value.icon" :color="selectValue == index ? '#7862eb' : ''"></component>
        <span>{{value.text}}</span>
      </div>
      <div class="sidebar__links-slider" :style="{top: 40*selectValue + 6 + 'px'}"></div>
    </div>
    <RouterLink to="/">Выйти</RouterLink>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconLogout from '@/components/icons/IconLogout.vue'

const selectValue = ref(1)
const values = [
  { text: 'Профиль организации', icon: IconProfile, link: '/organization-profile' },
  { text: 'Профиль пользователя', icon: IconProfile, link: '/user-profile' },
  { text: 'Мои кейсы', icon: IconFolder, link: '/my-cases' }
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
        <span
          :class="{
            'sidebar__text p-14-500': true,
            'sidebar__text--selected': selectValue == index
          }"
          >{{ value.text }}</span
        >
      </RouterLink>
      <div class="sidebar__links-slider" :style="{ top: 52 * selectValue + 6 + 'px' }"></div>
    </div>
    <div class="sidebar__logout">
      <RouterLink to="/">
        <IconLogout />
        Выйти
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  // margin-left: 10px;
  height: 476px;
  width: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 15px 0;
  // position: relative;
  background: $default-white;
  border-radius: 10px;
  box-shadow: $box-shadow-default;

  &__logout {
    padding-left: 15px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      // position: relative;
    }
  }

  &__text {
    transition: all 0.2s ease;

    &--selected {
      color: $primary-color;
    }
  }
}

.sidebar__links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &-slider {
    position: absolute;
    top: 0;
    left: 0;
    height: 38px;
    width: 3px;
    padding-left: 0 !important;
    background: $primary-color;
    transition: 0.2s;
    border-radius: 0px 25px 25px 0px;
  }

  .selected {
    color: $primary-color;
  }

  a {
    display: grid;
    gap: 8px;
    grid-template-columns: 19px auto;
    align-items: center;
    padding-left: 15px;
    transition: 0.2s;
    cursor: pointer;
    color: $default-black;
  }
}
</style>

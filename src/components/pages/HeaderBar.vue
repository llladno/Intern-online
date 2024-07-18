<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconHeaderNotification from '@/components/icons/IconHeaderNotification.vue'
</script>

<template>
  <header class="header">
    <RouterLink to="/"><IconLogo /></RouterLink>
    <div class="header__nav">
      <div class="header__nav-left">
        <RouterLink to="/develop" class="p-16-400">Блог</RouterLink>
        <RouterLink to="/develop" class="p-16-400">Помощь</RouterLink>
      </div>
      <div class="header__nav-right">
        <IconHeaderNotification />
        <RouterLink to="/login" class="p-16-400">Вход</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 55px;
  padding: 0 40px;

  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 40px;

    a {
      color: $default-white;
    }

    &-left {
      margin-left: 52px;
      display: flex;
      align-items: center;
      gap: 35px;
    }

    &-right {
      display: flex;
      align-items: center;
      gap: 29px;
    }
  }
}
</style>

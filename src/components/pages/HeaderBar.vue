<script setup lang="ts">
import IconHeaderNotification from '@/components/icons/IconHeaderNotification.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
  <header class="header">
    <router-link to="/">
      <icon-logo />
    </router-link>
    <div class="header__nav">
      <div class="header__nav-left">
        <router-link to="/cases" class="p-16-400"> Кейсы </router-link>
        <router-link to="/develop" class="p-16-400"> Блог </router-link>
        <router-link to="/develop" class="p-16-400"> Помощь </router-link>
      </div>
      <div class="header__nav-right">
        <icon-header-notification />
        <router-link to="/login" class="p-16-400"> Вход </router-link>
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

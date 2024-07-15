<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconHeaderNotification from '@/components/icons/IconHeaderNotification.vue'
</script>

<template>
  <header>
    <RouterLink to="/"><IconLogo /></RouterLink>
    <div class="header__nav">
      <div class="header__nav-left">
        <RouterLink to="/develop">Блог</RouterLink>
        <RouterLink to="/develop">Помощь</RouterLink>
      </div>
      <div class="header__nav-right">
        <IconHeaderNotification />
        <RouterLink to="/login">Вход</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 55px;
  padding: 0 40px;

  .header__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 40px;

    a {
      color:$default-white;
      font-size: 16px;
      font-weight: 400;
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

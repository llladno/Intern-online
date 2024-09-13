<script setup lang="ts">
import AuthPhoto from '@/assets/media/img/AuthPhoto.png'
import AuthLayout from '@/components/pages/authorization/AuthLayout.vue'
</script>

<template>
  <main>
    <auth-layout />
    <img :src="AuthPhoto" alt="" class="auth-img" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  width: 100vw;
  overflow: hidden;
  justify-content: space-between;

  img {
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }

  .auth-img {
    opacity: 1;
    transition: opacity 0.6s ease;
  }
}
</style>

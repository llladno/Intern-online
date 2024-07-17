<script setup lang="ts">
import AuthLayout from '@/components/pages/authorization/AuthLayout.vue'
import AuthPhoto from '@/assets/media/img/AuthPhoto.png'
</script>

<template>
  <main>
    <AuthLayout />
    <img :src="AuthPhoto" alt="" />
  </main>
</template>

<style scoped>
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
}
</style>

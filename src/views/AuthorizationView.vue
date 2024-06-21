<script setup lang="ts">

import Auth from '@/components/layout/Auth/Auth.vue'
import AuthPhoto from '@/assets/media/img/AuthPhoto.png'


</script>

<template>

  <main>
    <Auth/>
    <img :src="AuthPhoto" alt="">
  </main>
</template>

<style scoped>
main{
  display: flex;
  width: 100vw;
  overflow: hidden;
  justify-content: space-between;

  img{
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
}
</style>
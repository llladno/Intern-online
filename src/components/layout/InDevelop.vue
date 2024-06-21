<script setup lang="ts">
import OIButton from '@/components/common/OIButton.vue'
</script>

<template>
  <div class="in-develop">
    <div>
      <h1>Эта страница находится в разработке :(</h1>
      <p>Приносим извинения за доставленные неудобства</p>
      <RouterLink to="/">
        <OIButton>Вернуться на главную</OIButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.in-develop {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 800px;
    text-align: center;

    p {
      opacity: 0.7;
    }
  }
}
</style>

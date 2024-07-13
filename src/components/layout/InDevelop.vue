<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
</script>

<template>
  <div class="in-develop">
    <div>
      <h1>Эта страница находится в разработке :(</h1>
      <p>Приносим извинения за доставленные неудобства</p>
      <RouterLink to="/">
        <IOButton>Вернуться на главную</IOButton>
      </RouterLink>
      <RouterLink to="/ui-kit"> Либо можно посмотреть на замечательный ui-kit </RouterLink>
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

<template>
  <div class="verification">
    <div class="verification__left">
      <IconTickCircle />
    </div>
    <div class="verification__info">
      <p class="p-14-500">Верификация аккаунта</p>
      <p class="p-12-400">Не верефицирован</p>
    </div>
    <div class="verification__right">
      <IconArrow />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTickCircle from '../icons/IconTickCircle.vue'
import IconArrow from '../icons/IconArrow.vue'
</script>

<style lang="scss" scoped>
.verification {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: $default-border;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  transition: $default-transition;

  &:hover {
    box-shadow: 4px 5px 6px 0px rgba(16, 24, 40, 0.05);
    transform: translateY(-1px);
  }

  &__info {
    margin-left: 14px;

    p:first-child {
      color: $additional-color;
      margin-bottom: 2px;
    }
    p:last-child {
      opacity: 0.6;
    }
  }

  &__right {
    margin-left: auto;
  }
}
</style>

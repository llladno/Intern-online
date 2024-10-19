<script setup lang="ts"></script>

<template>
  <div class="main-container organization-case-solution-description">
    <h3>Описание</h3>
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped lang="scss">
.organization-case-solution-description {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>

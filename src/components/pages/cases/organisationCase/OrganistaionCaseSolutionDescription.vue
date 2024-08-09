<script setup lang="ts"></script>

<template>
  <div class="main-container organisation-case-solution-description">
    <h3>Описание</h3>
    <p>
      <slot> </slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
.organisation-case-solution-description {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>

<script setup lang="ts">
import { casesInfo } from '@/stores/mock'
import { useRoute } from 'vue-router'
const route = useRoute()
const caseInfo = casesInfo.find((caseInfo) => caseInfo.id == +route.params.id)
</script>

<template>
  <div class="organisation-case">
    <div class="organisation-case__header main-container">
      <RouterLink to="my-cases"> Назад</RouterLink>
      <div>
        <div>
          <h2>{{ caseInfo?.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

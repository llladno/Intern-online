<template>
  <div class="registration">
    <div class="registration-header">
      <div class="registration-header__progress-bar">
        <div class="registration-header__progress-bar__step" :style="{width: (stage/4) * 100 + '%'}" />
      </div>
    </div>
    <transition mode="out-in">
      <component :is="activeComponent" :key="stage" :stage="stage" @next-stage="nextStage" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import Stage1 from '@/components/pages/registration/Stage1.vue'
import Stage2 from '@/components/pages/registration/Stage2.vue'
import Stage4 from '@/components/pages/registration/Stage4.vue'

const stage = ref(0)
const activeComponent = shallowRef()

setTimeout(()=> {
  stage.value++
},500)

onMounted(() => {
  activeComponent.value = Stage1
})

function nextStage(data) {
  console.log(data)
  if (activeComponent.value === Stage2)activeComponent.value = Stage4
  else activeComponent.value = Stage2

  stage.value++
}

</script>

<style scoped lang="scss">
.registration{
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-header{
    margin-top: 42px;
    width: 70%;

    &__progress-bar{
      background: #E4E4E7;
      height: 17px;
      border-radius: 24px;
      width: 100%;

      &__step{
        height: 100%;
        border-radius: 24px;
        background: #7862EB;
        transition: all 1s ease;
      }
    }
  }
  &-body{
  }
}

.v-enter-active,
.v-leave-active {
  transition-delay: 0.5s;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
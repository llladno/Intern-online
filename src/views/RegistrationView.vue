<template>
  <transition mode="out-in">
    <div class="registration" v-if="!finalStage">
      <div class="registration-header">
        <div class="registration__back" @click="stage--">Назад</div>

        <div class="registration-header__progress-bar">
          <div
            class="registration-header__progress-bar__step"
            :style="{ width: (stage / 4) * 100 + '%' }"
          />
        </div>
      </div>
      <transition mode="out-in">
        <component :is="activeComponent" :key="stage" :stage="stage" @next-stage="nextStage" />
      </transition>
    </div>
    <div v-else class="registration-finaly" ref="finalyRef">
      <h1 class="skeleton-box">Стажер.Онлайн</h1>
      <h2>Персонализируем аккаунт . . . . .</h2>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive, ref, shallowRef, watch } from 'vue'
import Stage1 from '@/components/pages/registration/Stage1.vue'
import Stage2 from '@/components/pages/registration/Stage2.vue'
import Stage5 from '@/components/pages/registration/Stage5.vue'
import Stage3 from '@/components/pages/registration/Stage3.vue'
import Stage4 from '@/components/pages/registration/Stage4.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore'
import type { AllStagesDataI, StagesDataI } from '@/types/auth'

const router = useRouter()
const userStore = useUserStore()

const stage = ref<number>(0)
const activeComponent = shallowRef()
const finalStage = ref<boolean>(false)
const finalyRef = ref<HTMLDivElement | null>(null)

setTimeout(() => {
  stage.value++
  activeComponent.value = Stage1
}, 500)

const allStagesData = reactive<AllStagesDataI>({
  accountType: '',
  data: {}
})

const nextStage = (data: { from: string; data: StagesDataI | 'account' }) => {
  switch (data.from) {
    case 'stage1': {
      if (data.data === 'account') {
        stage.value = 2
        activeComponent.value = Stage2
        allStagesData.accountType = 'account'
      } else {
        allStagesData.accountType = 'manager'
        activeComponent.value = Stage3
        stage.value = 2
      }
      break
    }
    case 'stage2': {
      if (data.data !== 'account') {
        activeComponent.value = Stage5
        allStagesData.data = {
          name: data.data.name,
          surname: data.data.surname,
          patronymic: data.data.patronymic
        }
        stage.value = 4
      }
      break
    }
    case 'stage3': {
      if (data.data !== 'account') {
        allStagesData.data = data.data
        activeComponent.value = Stage4
        stage.value = 3
      }

      break
    }
    case 'stage4': {
      if (data.data !== 'account') {
        activeComponent.value = Stage5
        //TODO: Поправить передачу данных
        //@ts-ignore
        allStagesData.data.activity = data.data
        stage.value = 4
      }
      break
    }
    case 'stage5': {
      //@ts-ignore
      allStagesData.data.email = data.data
      if (allStagesData.accountType == 'manager') {
        const registrationData = {
          email: allStagesData.data.email ?? '',
          inn: allStagesData.data.inn ?? '',
          name: allStagesData.data.name ?? '',
          organization_form: allStagesData.data.organization_form ?? '',
          field_of_activity: allStagesData.data.activity ?? ''
        }
        userStore.signUpOrganisation(registrationData)
      }
      // finalStage.value = true
      // userStore.signUp({
      //   email: allStagesData.data.email,
      //   organisation: allStagesData.accountType === 'manager'
      // })
      // setTimeout(() => {
      //   finalyRef.value.classList.add('register-finaly__animation')
      // }, 2000)
      // setTimeout(() => {
      //   router.push('/')
      // }, 3000)
      break
    }
  }
}

watch(stage, (newStage, oldValue) => {
  if (newStage < oldValue) {
    stage.value = newStage
    switch (newStage) {
      case 0:
        router.push('/login')
        break
      case 1:
        activeComponent.value = Stage1
        break
      case 2:
        if (allStagesData.accountType === 'manager') {
          stage.value = 1
          activeComponent.value = Stage1
        } else {
          activeComponent.value = Stage2
          stage.value = 2
        }
        break
      case 3:
        if (allStagesData.accountType === 'account') {
          stage.value = 2
          console.log(stage.value)
          activeComponent.value = Stage2
        } else {
          activeComponent.value = Stage4
        }
        break
      case 4:
        activeComponent.value = Stage4
        break
      default:
        activeComponent.value = Stage1
        break
    }
  }
})
</script>

<style scoped lang="scss">
.registration {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;

  &__back {
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      color: #727272;
    }
  }

  &-header {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 42px;
    width: 70%;

    &__progress-bar {
      background: #e4e4e7;
      height: 17px;
      border-radius: 24px;
      width: 100%;

      &__step {
        height: 100%;
        border-radius: 24px;
        background: #7862eb;
        transition: all 1s ease;
      }
    }
  }
}

.registration-finaly {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: $primary-color;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
}

.register-finaly__animation {
  opacity: 1;
  transform: translateY(0);
  animation: fade-in-animation 1s ease forwards;
}

@keyframes fade-in-animation {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}

.skeleton-box {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
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

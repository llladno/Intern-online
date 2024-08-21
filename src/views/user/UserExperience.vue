<template>
  <div class="experience">
    <h3 class="experience__title p-18-500">Опыт работы</h3>

    <!-- Первый элемент всегда отображается -->
    <div class="experience__item">
      <IOInput placeholder="Название компании" />
      <IOInput placeholder="Должность" />
      <div class="experience__date">
        <IOInputDate isDays />
        <div class="experience__label p-13-500">Окончание работы</div>
        <IOInputDate isDays />
      </div>
      <IOCheckbox value="date" id="date" label="По настоящее время" />
    </div>

    <div v-for="(item, index) in experiences" :key="item.id">
      <transition name="experience" appear>
        <div v-show="item.isNew" class="experience__item" :style="{ marginTop: '30px' }">
          <IOInput placeholder="Название компании" />
          <IOInput placeholder="Должность" />
          <div class="experience__date">
            <IOInputDate isDays />
            <div class="experience__label p-13-500">Окончание работы</div>
            <IOInputDate isDays />
          </div>
          <IOCheckbox value="date" id="date" label="По настоящее время" :checked="isDateNow" />
          <IOButton
            v-if="index > 0"
            width="211"
            class="experience__btn"
            @click="removeExperience(index)"
          >
            Удалить</IOButton
          >
        </div>
      </transition>
    </div>

    <div class="experience__btn">
      <IOButton icon background="white" width="211" @click="addExperience" class="experience__btn"
        >Добавить место работы</IOButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOCheckbox from '@/components/common/IOCheckbox.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'

interface Experience {
  id: number
  isNew: boolean
}

const isDateNow = ref<boolean>(false)
const experiences = ref<Experience[]>([{ id: Date.now(), isNew: false }])

const addExperience = () => {
  experiences.value.push({ id: Date.now(), isNew: true })
}

const removeExperience = (index: number) => {
  if (experiences.value.length > 1) {
    experiences.value[index].isNew = false
  }
}
</script>

<style scoped lang="scss">
.experience {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 18px;
  }

  &__date {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 18px;
  }

  &__btn {
    margin-top: 17px;
  }

  &-enter-active {
    transition: transform 0.3s ease-out;
  }
  &-enter-from {
    opacity: 0;
    transform: translateX(-20px);
  }
  &-enter-to,
  &-leave {
    opacity: 1;
    transform: translateX(0);
  }

  &-leave-active {
    transition: all 0.4s ease-in;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>

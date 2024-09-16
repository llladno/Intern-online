<template>
  <div class="experience">
    <h3 class="experience__title p-18-500">Опыт работы</h3>
    <transition-group name="experience" appear>
      <div
        class="experience__item"
        v-for="(item, index) in experiences"
        :key="item.id"
        :style="{ marginTop: item.isNew ? '30px' : '0' }"
      >
        <IOInput v-model.lazy="item.company" placeholder="Название компании" />
        <IOInput v-model.lazy="item.position" placeholder="Должность" />
        <div class="experience__date">
          <IOInputDate v-model="item.startDate" isDays />
          <div class="experience__label p-13-500">Окончание работы</div>
          <IOInputDate v-model="item.endDate" isDays />
        </div>
        <IOCheckbox
          value="date"
          id="date"
          label="По настоящее время"
          v-model:checked="item.isCurrent"
        />
        <IconDelete class="experience__svg" v-if="index > 0" @click="removeExperience(index)" />
      </div>
    </transition-group>

    <div class="experience__btn">
      <IOButton icon background="white" width="211" @click="addExperience" class="experience__btn">
        Добавить место работы
      </IOButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOCheckbox from '@/components/common/IOCheckbox.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import type { UserExperienceI } from '@/types/userProfile'
const props = defineProps<{
  experiences: UserExperienceI[]
}>()

const emit = defineEmits<{
  (e: 'update:experiences', experiences: UserExperienceI[]): void
}>()

const experiences = ref<UserExperienceI[]>(
  props.experiences.length > 0
    ? props.experiences
    : [
        {
          id: Date.now(),
          company: '',
          position: '',
          startDate: null,
          endDate: null,
          isCurrent: false,
          isNew: true
        }
      ]
)
const addExperience = () => {
  const newExperience = {
    id: Date.now(),
    company: '',
    position: '',
    startDate: null,
    endDate: null,
    isCurrent: false,
    isNew: true
  }
  experiences.value.push(newExperience)
  emit('update:experiences', experiences.value)
}

const removeExperience = (index: number) => {
  if (experiences.value.length > 1) {
    experiences.value.splice(index, 1)
    emit('update:experiences', experiences.value)
  }
}

watch(
  experiences,
  (newExperiences) => {
    emit('update:experiences', newExperiences)
  },
  { deep: true }
)
</script>

<style scoped lang="scss">
.experience {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

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

  &__svg {
    margin-top: 17px;
    cursor: pointer;
    transition: $default-transition;

    &:hover {
      opacity: 0.7;
    }
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

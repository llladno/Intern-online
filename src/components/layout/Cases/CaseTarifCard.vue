<script setup lang="ts">
import OIButton from '@/components/common/OIButton.vue'
import IconStar from '@/components/icons/IconStar.vue'

defineProps({
  tarif: Object as any
})
</script>

<template>
  <div class="tarif-card">
    <div class="tarif-card__info">
      <h3>{{ tarif.title }}</h3>
      <div class="tarif-card__stars">
        <IconStar v-for="star in tarif.stars" :key="star" />
      </div>
      <h3>{{ tarif.cost }} руб</h3>
      <ul>
        <li v-for="adventage in tarif.advantages" :key="adventage">{{ adventage }}</li>
      </ul>
    </div>
    <OIButton>Оплатить</OIButton>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/base/variables.scss';
.tarif-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: $default-border;
  border-radius: 10px;

  width: 291px;
  padding: 29px 36px 31px 36px;

  gap: 31px;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    height: 100%;

    ul li {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 7px;
    }
  }

  &__stars {
    display: flex;
    gap: 5px;
  }
}
</style>

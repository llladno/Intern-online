<template>
  <div class="tags">
    <div class="tags__tag">
      <icon-book-mark />
      <span>{{ tags.category.join(', ') }}</span>
    </div>
    <div class="tags__tag" v-if="organistaion">
      <icon-star />
      <span>{{ tags.tarif }}</span>
    </div>
    <div class="tags__tag">
      <icon-clock />
      <span>{{ tags.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrganisationCasesTagsI } from '@/types/organisationCasesI'
import IconStar from '@/components/icons/IconStar.vue'
import IconBookMark from '@/components/icons/IconBookMark.vue'
import IconClock from '@/components/icons/IconClock.vue'

defineProps<{ tags: OrganisationCasesTagsI; organistaion?: boolean }>()
</script>

<style scoped lang="scss">
.tags {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 11px;

  &__tag {
    display: flex;
    gap: 3px;

    & span {
      font-size: 12px;
      font-weight: 500;
      line-height: 16.8px;
      text-align: left;
      color: #535357;
    }
  }
}
</style>

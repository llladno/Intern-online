<template>
  <DropdownMenu class="dropdown">
    <DropdownMenuTrigger><IconDotesTemp /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        v-for="item in actionsDropdownMenu"
        :key="item.id"
        class="dropdown__item font-medium"
      >
        <!-- <component  :is="item.icon"></component> -->
        <div class="pl-4">{{ item.title }}</div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentI } from '@/types/componentsProps/commonProps'
import IconDotesTemp from '@/components/icons/IconDotesTemp.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconDraft from '@/components/icons/IconDraft.vue'
import IconArchive from '@/components/icons/IconArchive.vue'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../shadcn/ui/dropdown-menu'

const actionsDropdownMenu = ref<ComponentI[]>([
  {
    id: '1',
    title: 'Удалить',
    icon: IconDelete
  },
  {
    id: '2',
    title: 'Черновик',
    icon: IconDraft
  },
  {
    id: '3',
    title: 'В Архив',
    icon: IconArchive
  }
])
</script>

<style lang="scss">
.dropdown {
  &__item {
    cursor: pointer;
    transition: $default-transition;

    &:hover {
      background-color: $default-light-violet;
    }
  }
}
</style>

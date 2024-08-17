<template>
  <dropdown-menu>
    <dropdown-menu-trigger><icon-dotes-temp /></dropdown-menu-trigger>
    <dropdown-menu-content>
      <dropdown-menu-item
        v-for="item in actionsDropdownMenu"
        :key="item.id"
        class="font-medium cursor-pointer"
      >
        <span class="pr-4" v-html="item.icon" />
        {{ item.title }}
      </dropdown-menu-item>
    </dropdown-menu-content>
  </dropdown-menu>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../shadcn/ui/dropdown-menu'
import IconDotesTemp from '@/components/icons/IconDotesTemp.vue'

const actionsDropdownMenu: { id: string; title: string; icon: string }[] = [
  {
    id: '1',
    title: 'Удалить',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            <line x1="10" x2="10" y1="11" y2="17"/>
            <line x1="14" x2="14" y1="11" y2="17"/>
          </svg>`
  },
  {
    id: '2',
    title: 'Черновик',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-pen-line">
          <rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"/>
          <path d="M16 4h2a2 2 0 0 1 1.73 1"/><path d="M8 18h1"/>
          <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
        </svg>`
  },
  {
    id: '3',
    title: 'В Архив',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-archive-restore">
            <rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2"/>
            <path d="M20 8v11a2 2 0 0 1-2 2h-2"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>
          </svg>`
  }
]
</script>

<style lang="scss"></style>

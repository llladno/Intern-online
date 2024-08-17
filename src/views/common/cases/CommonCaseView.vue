<template>
  <div class="main-container common-case-header">
    <div class="common-case-header__side common-case-header__side--left">
      <a @click="router.go(-1)">Назад</a>
      <div>
        <div class="common-case-header__img" />
        <div class="common-case-header__title">
          <h2 class="header-1">Наименование кейса</h2>
          <span class="common-case-header__title-organisation">ООО "ЗМС"</span>
        </div>
      </div>
    </div>
    <div class="common-case-header__side common-case-header__side--right">
      <div class="common-case-header__buttons">
        <i-o-button><icon-save-mark :width="11" :height="16" /></i-o-button>
        <i-o-button>Взять в работу</i-o-button>
      </div>
      <div class="common-case-header__stats">инфа</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IconSaveMark from '@/components/icons/IconSaveMark.vue'
import router from '@/router'
</script>

<style scoped lang="scss"></style>

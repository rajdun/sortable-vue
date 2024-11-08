<script setup>

import { useRouter } from 'vue-router'

const router =  useRouter();

import QuickSettings from '@/components/QuickSettings.vue'
</script>

<template>
  <div class="navbar">
    <div @click="router.push('/')" class="header">
      <h1 class="ingame-title">Sortable</h1>
    </div>
    <QuickSettings />
  </div>
</template>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  @media(max-width: 768px){
    padding: 1rem;
  }
}

.ingame-title{
  transition: all 0.25s ease-in-out;

  &:hover{
    cursor: pointer;
    transform: scale(1.05) translateY(-2%);
  }
}

.header{
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;

  &>h1{
    font-weight: bold;
  }
}
</style>

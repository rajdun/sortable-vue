<script setup>

import MainTitle from '@/components/MainTitle.vue'
import StartGameButton from '@/components/StartGameButton.vue'
import HowToPlayButton from '@/components/HowToPlayButton.vue'
</script>

<template>
  <div class="menuGroup">
    <MainTitle />
    <StartGameButton />
    <HowToPlayButton />
  </div>
</template>

<style scoped>
  .menuGroup{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
</style>

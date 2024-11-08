<script setup>

import MainTitle from '@/components/MainTitle.vue'
import StartGameButton from '@/components/StartGameButton.vue'
import HowToPlayButton from '@/components/HowToPlayButton.vue'
import { ref } from 'vue'

const animateStartGame = ref(false);

function startGameAnimation(){
  animateStartGame.value = true;
}

</script>

<template>
  <div class="menuGroup">
    <MainTitle :animateStartGame="animateStartGame" />
    <StartGameButton @startGame="startGameAnimation" />
    <HowToPlayButton :animateStartGame="animateStartGame" />
  </div>
</template>

<style scoped>
  .menuGroup{
    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-rows: 2fr 1fr 2fr;
  }
</style>

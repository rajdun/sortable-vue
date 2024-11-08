<script setup>

import { useGame } from '@/stores/game.js'

const gameStore = useGame();
</script>

<template>
  <div class="currentNumberDisplay">
    <h1>{{ gameStore.getCurrentNumber() }}</h1>
    <hr>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 10rem;
    margin: 0;
    text-align: center;
  }

  .currentNumberDisplay{
    width: 30vw;
    margin: auto;

    @media(max-width: 768px) {
      width: 60vw;
    }
  }
</style>

<script setup>

import ProgressBar from '@/components/ProgressBar.vue'
import { ref } from 'vue'
import { useGame } from '@/stores/game.js'

const timePercentage = ref(0);
const gameStore = useGame();

setInterval(function() {
  const timeLeft = gameStore.getTimeLeft();
  const config = gameStore.getConfig();

  timePercentage.value = timeLeft / config.timing * 100;
}, 100);

</script>

<template>
  <div class="currentNumberDisplay">
    <h1>{{ gameStore.getCurrentNumber() }}</h1>
    <ProgressBar :value="timePercentage" />
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

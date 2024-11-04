<script setup>

import { useGame } from '@/stores/game.js'
import GameBoard from '@/components/GameBoard.vue'
import CurrentNumberDisplay from '@/components/CurrentNumberDisplay.vue'
import { onMounted, ref } from 'vue'

const gameStore = useGame();
const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
  gameStore.setGameDifficultyFromLocalStorage();
  gameStore.setDifficulty(gameStore.getDifficulty());
})

</script>

<template>
  <div class="game" v-if="isLoaded" >
    <CurrentNumberDisplay />
    <div class="game-board">
      <GameBoard />
    </div>
  </div>
</template>

<style scoped>
  .game-board {
    display: flex;
    justify-content: center;
  }
</style>

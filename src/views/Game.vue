<script setup>

import { useGame } from '@/stores/game.js'
import GameBoard from '@/components/GameBoard.vue'
import CurrentNumberDisplay from '@/components/CurrentNumberDisplay.vue'
import { onMounted, ref } from 'vue'
import EndGameMessage from '@/components/EndGameMessage.vue'
import Navbar from '@/components/Navbar.vue'

const gameStore = useGame();
const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
  gameStore.loadDifficultyFromLocalStorage();
  gameStore.setDifficulty(gameStore.difficulty);
  gameStore.initializeGame();
})

</script>

<template>
  <EndGameMessage v-if="gameStore.isGameOver()" />
  <div class="container">
    <Navbar />
    <div class="game" v-if="isLoaded" >
      <CurrentNumberDisplay />
      <div class="game-board">
        <GameBoard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .game-board {
    display: flex;
    justify-content: space-around;
  }

  .game{
    animation: show 0.5s ease-in-out;
    animation-fill-mode: forwards;
    margin: auto;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: scale(0) translateY(-5%);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
</style>

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
  gameStore.setGameDifficultyFromLocalStorage();
  gameStore.setDifficulty(gameStore.getDifficulty());
})

</script>

<template>
  <EndGameMessage v-if="gameStore.isEndGame()" />
  <Navbar />
  <div class="game" v-if="isLoaded" >
    <CurrentNumberDisplay />
    <div class="game-board">
      <GameBoard />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .game-board {
    display: flex;
    justify-content: center;
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

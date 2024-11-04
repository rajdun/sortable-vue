<script setup>

import { useGame } from '@/stores/game.js'
import { useRouter } from 'vue-router'

const game = useGame();
const router = useRouter();
</script>

<template>
  <div class="container">
    <h1 v-if="game.state === 'gameOver'">Game Over</h1>
    <h1 v-else-if="game.state === 'gameWon'">You Won!</h1>
    <button @click="game.setDifficulty(game.getDifficulty())">Play Again</button>
    <button @click="router.push('/')">Home</button>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 99;
}
</style>

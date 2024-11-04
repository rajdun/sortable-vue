<script setup>

import { useGame } from '@/stores/game.js'

const game = useGame();
</script>

<template>
  <div class="container">
    <h1 v-if="game.state === 'gameOver'">Game Over</h1>
    <h1 v-else-if="game.state === 'gameWon'">You Won!</h1>
    <button @click="console.log(123)">Play Again</button>
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
}
</style>

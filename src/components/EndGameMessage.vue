<script setup>

import { useGame } from '@/stores/game.js'
import { computed, ref } from 'vue'

const game = useGame();

const displayMessage = ref(true);
const animateWindow = ref(false);

const gameTime = computed(() => {
  const duration = game.endGame - game.startGame;
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  const miliseconds = Math.floor((duration % 1000) / 10);

  if (minutes > 0) {
    // When there are minutes, format as "Xm Ys"
    return `${minutes}m ${seconds}s`;
  } else {
    // When there are no minutes, format as "Xs Yµs"
    return `${seconds}s ${miliseconds}ms`;
  }
});

function showWindow() {
  displayMessage.value = !displayMessage.value;
}

function hideWindow() {
  animateWindow.value = true;
  setTimeout(() => {
    displayMessage.value = !displayMessage.value;
    animateWindow.value = false;
  }, 500);
}
</script>

<template>
  <button @click="showWindow" class="showWindowButton button clickable" v-if="!displayMessage">
    <img src="/arrowUp.svg" alt="Arrow Up" />
  </button>
  <div v-if="displayMessage" class="container" :class="[{'greenBorder': game.state === 'gameWon', 'redBorder': game.state !== 'gameWon'}, {'hideWindow': animateWindow}]">
    <button @click="hideWindow" class="button close-button" :class="game.state === 'gameWon' ? 'bg-success' : 'bg-danger'">
      <img src="/close.svg" alt="Close" />
    </button>
    <div>
      <h1 v-if="game.state === 'gameOver'" class="color-danger">Game Over</h1>
      <h1 v-else-if="game.state === 'gameWon'" class="color-success">You Won!</h1>
    </div>
    <h2>Time: {{ gameTime }}</h2>
    <button class="button option clickable" @click="game.setDifficulty(game.getDifficulty())">Play Again</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 8rem;
}
h2 {
  font-size: 5rem;
}

.showWindowButton {
  position: fixed;
  bottom: 0.5rem;
  right: calc(50vw - 2rem);
  padding: 0.5rem;
  font-size: 2rem;
  border-radius: 2rem 2rem 0 0;
  cursor: pointer;
  z-index: 100;
  animation: jumpFromBottom 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

.hideWindow {
  animation: jumpToBottom 0.5s ease-in-out !important;
  animation-fill-mode: forwards;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0 1rem;
  font-size: 2rem;
  border-radius: 2rem 2rem;
  cursor: pointer;

}


.greenBorder {
  border: 0.25rem solid var(--color-success);
}

.redBorder {
  border: 0.25rem solid var(--color-danger);
}

.option {
  margin: 1rem;
  padding: 2rem;
  font-size: 4rem;
}
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
  top: 20vh;
  left:30vw;
  right: 30vw;
  bottom: 20vh;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background-color: var(--vt-c-black-soft);
  animation: jumpFromBottom 0.5s ease-in-out;
  animation-fill-mode: forwards;
  border-radius: 2rem;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    top: 66vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-radius: 2rem 2rem 0 0;
  }
}
</style>

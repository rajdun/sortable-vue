<script setup>

import { useGame } from '@/stores/game.js'

const game = useGame();

function setDifficulty(difficulty) {
  game.setDifficulty(difficulty);
}

</script>

<template>
  <div class="settingsWindow">
    <h1>Settings</h1>
    <hr>
    <div class="settingsGroup">
      <h2>Difficulty</h2>
      <div class="difficulty">
        <button @click="setDifficulty('easy')">Easy</button>
        <button @click="setDifficulty('medium')">Medium</button>
        <button @click="setDifficulty('hard')">Hard</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .settingsWindow{
    position: fixed;
    top: 50vh;
    left: 50vw;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 200;
    padding: 1.5rem;
    border-radius: 2rem;
 }

 hr {
   width: 100%;
   margin: 1rem 0;
 }
</style>

<script setup>

import { useGame } from '@/stores/game.js'
import { onMounted, ref } from 'vue'

const game = useGame();
const currentDifficulty = ref('medium');

function setDifficulty(difficulty) {
  game.setDifficulty(difficulty);
}

onMounted(() => {
  currentDifficulty.value = game.getDifficulty();

  document.querySelector(`input[value="${currentDifficulty.value}"]`).checked = true;
})

</script>

<template>
  <div class="settingsWindow">
    <h1>Settings</h1>
    <hr>
    <div class="settingsGroup">
      <div class="difficulty-input-group">
        <span class="optionTitle">Difficulty</span>
        <span class="difficulty">
          <input @click="setDifficulty('easy')" type="radio" name="difficulty" value="easy" id="">
          <input @click="setDifficulty('medium')" type="radio" name="difficulty" value="medium" id="">
          <input @click="setDifficulty('hard')" type="radio" name="difficulty" value="hard" id="">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    text-align: left;

   @media (max-width: 768px) {
     left: 0;
     right: 0;
     bottom: 0;
     border-radius: 0;
     justify-content: normal;
   }
 }

 .difficulty-input-group{
   display: flex;
   gap: 1rem;
   align-items: center;
 }

 h1{
    font-size: 4rem;
    font-weight: bold;
 }

.optionTitle{
  font-size: 2.5rem;
}

 hr {
   width: 100%;
   margin: 1rem 0;
 }

 .difficulty {
   display: flex;
   align-items: normal;
 }

 .difficulty input[type="radio"] {
   appearance: none;
   -webkit-appearance: none;
   width: 3rem;
   height: 2rem;
   margin: 0 0.15rem;
   border: 0.2rem solid white;
   background-color: var(--color-background-soft);
   position: relative;
   cursor: pointer;
 }

 .difficulty input[type="radio"]:checked {
   background-color: white; /* Change this to your desired color when selected */
 }

 /* Hide the connector after the last radio button */
 .difficulty input[type="radio"]:last-child:after {
   display: none;
 }

 .difficulty input[type="radio"]:last-child {
   border-radius: 0 1rem 1rem 0;
 }

 .difficulty input[type="radio"]:first-child {
   border-radius: 1rem 0 0 1rem;
 }
</style>

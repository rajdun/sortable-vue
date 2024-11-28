<script setup>

import { useGame } from '@/stores/game.js'
import { onMounted, ref } from 'vue'

const game = useGame();
const currentDifficulty = ref('medium');

const emit = defineEmits(['close'])

const config = ref(null);

function setDifficulty(difficulty) {
  game.setDifficulty(difficulty);

  config.value = game.getConfig();

  game.initializeGame();
}

onMounted(() => {
  currentDifficulty.value = game.difficulty;

  document.querySelector(`input[value="${currentDifficulty.value}"]`).checked = true;

  config.value = game.getConfig();
})

</script>

<template>
  <div @click="emit('close')" class="background">

  </div>
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
      <div v-if="config">
        <hr>
        <span class="optionTitle">Time: </span>
        <span class="optionValue">{{config.timing}}s</span>
        <hr>
        <span class="optionTitle">Rerolls: </span>
        <span class="optionValue">{{config.rerolls}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
 .settingsWindow{
    position: fixed;
    top: 25vh;
    left: calc(50vw - 20rem);
    width: 40rem;
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
    overflow-y: scroll;
    overflow-x: hidden;

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

.optionValue{
  font-size: 2rem;
  color: var(--vt-c-white-mute);
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

<script setup>

import { useGame } from '@/stores/game.js'
import SettingsWindow from '@/components/SettingsWindow.vue'
import { ref } from 'vue'

const game = useGame();
const settingsWindowVisible = ref(false);

function resetGame() {
  game.setDifficulty(game.getDifficulty());
}

function toggleSettingsWindow() {
  settingsWindowVisible.value = !settingsWindowVisible.value;
}

</script>

<template>
  <div class="quickSettings">
    <span @click="resetGame" class=""><img src="/reset.svg" alt="reset"></span>
    <span @click="toggleSettingsWindow" class=""><img src="/settings.svg" alt="settings"></span>
    <SettingsWindow v-if="settingsWindowVisible" />
  </div>
</template>

<style scoped>
.quickSettings {
  display: flex;
  position: fixed;
  justify-content: right;
  right: 0px;
  z-index: 200;

  & > span {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1) translateY(-5%);
    }

    & > img {
      width: 5rem;
      height: 5rem;

      @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>

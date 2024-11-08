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
    <div class="button-group">
      <div @click="resetGame" class=""><img class="icon" src="/reset.svg" alt="reset"></div>
      <div @click="toggleSettingsWindow" class=""><img class="icon" src="/settings.svg" alt="settings"></div>
    </div>
    <SettingsWindow v-if="settingsWindowVisible" />
  </div>
</template>

<style scoped>
.button-group{
  display: flex;
  justify-content: center;
  gap: 1rem;

  & > div {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1) translateY(-5%);
    }
  }
}

.icon {
  width: 5rem;
  height: 5rem;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
}
</style>

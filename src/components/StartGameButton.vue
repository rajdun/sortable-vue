<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useApp } from '@/stores/app.js'

const router = useRouter()
const startGameAnimation = ref(false)
const appConfig = useApp();

const emit = defineEmits(['startGame'])
function handleClick() {
  startGameAnimation.value = true;
  emit('startGame');
  appConfig.isHelpVisible = false;
  setTimeout(() => {
    router.push('game');
  }, 500);
}
</script>

<template>
  <div class="startGameButton">
    <button @click="handleClick" :class="startGameAnimation ? 'jumpToBottom' : ''" class="clickable button">PLAY</button>
  </div>
</template>

<style scoped lang="scss">
  .startGameButton {
    text-align: center;
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 6rem;
    width: 35rem;
  }

</style>

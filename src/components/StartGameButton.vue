<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const startGameAnimation = ref(false)

const emit = defineEmits(['startGame'])
function handleClick() {
  startGameAnimation.value = true;
  emit('startGame');
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
    font-size: 10rem;
    width: 40rem;
  }

</style>

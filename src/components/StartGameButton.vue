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
  <button @click="handleClick" :class="startGameAnimation ? 'jumpToBottom' : ''" class="clickable button">PLAY</button>
</template>

<style scoped lang="scss">
  button {
    padding: 0.5rem 2rem;
    font-size: 10rem;

    @media(max-width: 768px) {
      font-size: 5rem;
    }
  }

</style>

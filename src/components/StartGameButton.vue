<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  router.push('game');
}

</script>

<template>
  <button @click="handleClick" class="clickable button">PLAY</button>
</template>

<style scoped lang="scss">
  button {
    padding: 0.5rem 2rem;
    font-size: 10rem;
    animation: jumpFromBottom 1s ease-in-out 0.05s;

    @media(max-width: 768px) {
      font-size: 5rem;
    }
  }

</style>

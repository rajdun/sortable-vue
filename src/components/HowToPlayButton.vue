<script setup>

import { useApp } from '@/stores/app.js'

defineProps({
  animateStartGame: Boolean
})

const appConfig = useApp();

</script>

<template>
  <footer @click="appConfig.toggleHelp()" :class="animateStartGame ? 'jumpToBottom' : ''">
    <hr>
    <p>How to play</p>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    display: flex;
    margin: 5rem auto;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    transition: all 0.25s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.05) translateY(-2%);
      &>hr {
        box-shadow: 0 1rem 1rem 0.5rem rgba(0,0,0,0.2);
      }
      &>p {
        text-shadow: 0 1rem 1rem black;
      }
    }

    &:active {
      transform: scale(0.95) translateY(0);
    }

  }

  p {
    padding: 0 2rem;
  }
</style>

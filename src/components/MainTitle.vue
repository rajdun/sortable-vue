<script setup>
import { useGreetings } from '@/stores/greetings.js'

const greetingStore = useGreetings()

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  animateStartGame: Boolean
})
</script>

<template>
  <header :class="animateStartGame ? 'jumpToTop' : ''" >
    <h1 class="title" >Sortable</h1>
    <p class="subtitle">{{ greetingStore.getRandomGreeting() }}</p>
  </header>
</template>

<style scoped>
  .title {
    font-size: 10rem;
    font-weight: 900;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 5rem;
    }
  }

  .subtitle {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    animation: typing 1.5s steps(40, end);
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to{
      width: 100%;
    }
  }

  header {
    padding: 2rem;
  }

</style>

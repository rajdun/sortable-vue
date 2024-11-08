<script setup>
import { useGreetings } from '@/stores/greetings.js'

const greetingStore = useGreetings()
const subtitle = greetingStore.getRandomGreeting();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  animateStartGame: Boolean
})
</script>

<template>
  <header :class="animateStartGame ? 'jumpToTop' : ''" >
    <h1 class="title" >Sortable</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
  .title {
    font-size: 10rem;
    font-weight: 900;
    margin: 0;
    text-align: center;

  }

  .subtitle {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    animation: typing 2.5s steps(40, end);
    white-space: nowrap;

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

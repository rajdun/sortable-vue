<script setup>

</script>

<template>
  <button class="clickable">PLAY</button>
</template>

<style scoped lang="scss">
  button {
    padding: 0.5rem 2rem;
    font-size: 10rem;
    font-weight: 700;
    background: var(--button-bg-color);
    outline: none;
    border: none;
    border-radius: 5rem;
    color: white;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    animation: jumpFromBottom 1s ease-in-out 0.05s;



    @media(max-width: 768px) {
      font-size: 5rem;
    }
  }

</style>

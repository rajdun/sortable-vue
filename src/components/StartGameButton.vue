<script setup>

</script>

<template>
  <button>PLAY</button>
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

    &:hover {
      background: var(--button-bg-color-light);
      transform: scale(1.05) translateY(-2%);
      box-shadow: 0 1rem 1rem 0.5rem rgba(0,0,0,0.2);
    }

    @media(max-width: 768px) {
      font-size: 5rem;
    }
  }

</style>

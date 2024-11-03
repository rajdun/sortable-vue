<script setup>

</script>

<template>
  <footer>
    <hr>
    <p>How to play</p>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    padding: 3rem;
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    animation: jumpFromBottom 1s ease-in-out;
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

    @media(max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    padding: 0 2rem;
  }
</style>

<script setup>

import GameBoard from '@/components/GameBoard.vue'
</script>

<template>
<div id="how-to-play">
  <h1>How to play</h1>
  <hr>
  <p>
    On each turn, you’ll receive a random number. Click on any empty cell in the grid to place it.
  </p>
  <hr>
  <p>
    Your goal is to maintain a strictly ascending sequence of numbers across the grid—from left to right, and top to bottom. It’s perfectly fine to skip cells at first. For example, if you start with a low number, place it in the first cell; if the next number is very large, you might want to put it near the end. Later, when you receive a mid-range number, you can slot it into a suitable empty space that keeps all placed numbers in order.
  </p>
  <hr>
  <h1>
    <span class="green-text">Good</span> & <span class="red-text">Bad</span> example
  </h1>
  <hr>
  <table>
    <tr>
      <td class="cell selected correct">2</td>
      <td class="cell selected correct">10</td>
      <td class="cell selected correct">22</td>
    </tr>
    <tr>
      <td class="cell selected correct">45</td>
      <td class="cell">5</td>
      <td class="cell selected incorrect">21</td>
    </tr>
    <tr>
      <td class="cell selected correct">66</td>
      <td class="cell selected correct">98</td>
      <td class="cell">9</td>
    </tr>
  </table>
</div>
</template>

<style scoped>
#how-to-play{
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 25rem;
  background-color: var(--button-bg-color);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0,0,0,0.2);
  z-index: 9999;
}

.selected{
  background-color: #f0f0f0 !important;
  color: #000 !important;
}

.correct{
  border: #2ecc71 0.3rem solid;
}

.incorrect{
  border: #e74c3c 0.3rem solid;
}

.cell {
  font-size: 2rem;
  border-radius: 2rem;
  width: 7rem;
  height: 7rem;
  text-align: center;
  background-color: var(--color-background);
}

table {
  border-collapse: separate;
  border-spacing: 1em;
  margin: 2.5rem auto;
}

tbody{
  width: 100%;
}



h1{
  text-align: center;
  font-weight: bold;
}

p{
  font-weight: bold;
}

hr{
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid white;
}

.green-text{
  color: #2ecc71;
}

.red-text{
  color: #e74c3c;
}

</style>

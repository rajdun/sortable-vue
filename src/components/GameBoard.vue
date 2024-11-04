<script setup>
import { useGame } from '@/stores/game.js'
import { computed } from 'vue'

const gameStore = useGame()

const matrix = computed(() => gameStore.getMatrix().matrix)

function handleClick(x, y) {
  gameStore.setCell(x, y)
}
</script>

<template>
  <table>
    <tr v-for="(row, rowIndex) in matrix" :key="rowIndex">
      <td v-for="(col, colIndex) in row" :key="colIndex">
        <div class="cell">
          <button
            :disabled="col.isRevealed"
            class="clickable button cell"
            :class="col.isRevealed ? 'cell-revealed' : ''"
            @click="handleClick(col.row, col.col)"
          >
            {{ col.isRevealed ? col.value : col.row * gameStore.getMatrix().cols + col.col + 1 }}
          </button>
        </div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
.cell {
  font-size: 3rem;
  border-radius: 2rem;
  width: 9rem;
  height: 9rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
  }
}

table {
  border-collapse: separate;
  border-spacing: 1em;
}

button {
  height: 100%;
  width: 100%;
}

.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70%;
  margin: auto;
}

.cell-revealed {
  background-color: #f0f0f0;
  color: #000;
  transform: scale(0.95) translate(0, 0) !important;
  cursor: default;
  &:hover {
    transform: scale(0.95) translate(0, 0) !important;
  }
}
</style>

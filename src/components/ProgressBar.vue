<script setup>

const props = defineProps({
  value: Number,
})

</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: value + '%' }"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: var(--color-background);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--color-text);
}

.progress-bar__fill {
  height: 100%;
  background-color: var(--color-text);
  transition: width 0.1s;
}
</style>

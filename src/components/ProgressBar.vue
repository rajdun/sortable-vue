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
  background-color: var(--vt-c-white-mute);
  border-radius: 0.5rem;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background-color: var(--vt-c-white);
  transition: width 0.1s;
}
</style>

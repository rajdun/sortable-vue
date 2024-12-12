<script setup>
import { RouterView } from 'vue-router'
import HowToPlay from '@/components/HowToPlay.vue'
import { useApp } from '@/stores/app.js'

const appConfig = useApp();
</script>

<template>
  <HowToPlay v-if="appConfig.isHelpVisible" />
  <RouterView />
</template>

<style scoped>

</style>

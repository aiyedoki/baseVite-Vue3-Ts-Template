<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

/** 实时检测屏幕宽度是否小于750px */
const isMobile = ref(false)
const resize = () => (isMobile.value = window.innerWidth <= 750)
window.addEventListener("resize", resize)
resize()
provide('isMobile', isMobile)

</script>

<style scoped lang="scss">
</style>

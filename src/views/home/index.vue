<template>
  <template v-if="isMobile">
    <Mobile />
  </template>

  <template v-else>
    <Pc />
  </template>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Pc from './components/pc.vue'
import Mobile from './components/mobile.vue'

const isMobile = inject('isMobile')
</script>

<style scoped lang="scss"></style>

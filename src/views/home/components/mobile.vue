<template>
  <Header />
  <div class="mobile m-container s-m-t-20 flex-column flex-align-center">
    <img src="@/assets/logo.png" class="s-w-150" alt="" />
    <h3 class="s-fs-33">@kidoki/base-vite</h3>
    <span class="s-fs-20">{{ $t('home.introduce') }}</span>
  </div>

  <div class="width">
    <div v-for="(item, index) in list" :key="index" :style="{ background: item.bg, color: item.color }" class="s-fw-b s-fs-30 s-p-l-20 s-m-t-20">
      {{ item.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from './header.vue'

const list = ref([
  { text: '750px', bg: '#a91b31', color: '#fff' },
  { text: '700px', bg: '#425381', color: '#fff' },
  { text: '650px', bg: '#ff801c', color: '#fff' },
  { text: '600px', bg: '#7cd23b', color: '#fff' },
  { text: '550px', bg: '#a7029c', color: '#fff' },
  { text: '500px', bg: '#fcda35', color: '#fff' },
  { text: '450px', bg: '#058a53', color: '#fff' },
  { text: '400px', bg: '#3388ff', color: '#fff' },
  { text: '350px', bg: '#a4a9b2', color: '#fff' },
  { text: '300px', bg: '#de1859', color: '#fff' }
])
</script>

<style lang="scss" scoped>
.width {
  div {
    border-radius: 0 20px 20px 0;
    @for $i from 1 through 9 {
      &:nth-child(#{$i+1}) {
        width: 750px - ($i * 50px);
      }
    }
  }
}
</style>

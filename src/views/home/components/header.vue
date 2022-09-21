<template>
  <template v-if="isMobile">
    <header class="s-h-40 s-fw-b flex-row flex-just-between flex-align-center">
      <a href="https://github.com/aiyedoki/baseVite-Vue3-Ts-Template" target="_blank">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/github.svg" class="s-w-30" />
      </a>
      <span class="s-h-40 s-lh-40" @click="changeLan">
        <template v-if="lang === 'en'">切换英文</template>
        <template v-else>Toggle Chinese</template>
      </span>
    </header>
  </template>

  <template v-else>
    <header class="s-h-40 s-fw-b ">
      <div class="container flex-row flex-just-between flex-align-center">
        <a href="https://github.com/aiyedoki/baseVite-Vue3-Ts-Template" target="_blank">
          <img src="https://fastly.jsdelivr.net/npm/@vant/assets/github.svg" class="s-w-30" />
        </a>
        <span class="s-h-40 s-lh-40" @click="changeLan">
          <template v-if="lang === 'en'">切换英文</template>
          <template v-else>Toggle Chinese</template>
        </span>
      </div>
    </header>
  </template>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const lang = ref('cn')
const changeLan = () => {
  locale.value = lang.value === 'cn' ? 'en' : 'cn'
  lang.value = locale.value
}

const isMobile = inject('isMobile')
</script>

<style scoped lang="scss">
header {
  color: #fff;
  padding: 0 10px;
  background-color: #74747e;
  span {
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: #2aa8da;
    }
  }
}
</style>

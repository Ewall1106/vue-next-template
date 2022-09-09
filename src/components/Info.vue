<template>
  <div class="info">
    <img class="info__logo" width="40" height="40" src="@/assets/logo.png" alt="logo" />
    <p class="info__title">{{ name }}</p>
    <p class="info__desc">
      <span>Documents: </span>
      <a href="https://bamboo-docs.vercel.app/" target="_blank" rel="noopener">
        https://bamboo-docs.vercel.app
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Info',
  props: {
    name: String
  }
})
</script>

<style lang="scss" scoped>
.info {
  padding: 10px;
  &__title {
    font-size: 18;
    font-weight: bolder;
    color: #000;
    margin-top: 8px;
  }
  &__desc {
    font-size: 18;
    color: #000;
    margin-top: 8px;
  }
}
</style>

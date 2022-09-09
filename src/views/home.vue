<template>
  <div class="home">
    <Info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from '@/components/Info.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Info
  },
  setup() {
    return {}
  }
})
</script>

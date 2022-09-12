<template>
  <div class="home">
    <Info :name="info.name" />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Info from '@/components/Info.vue'
import HomeObserver from './store'

export default defineComponent({
  name: 'Home',
  components: {
    Info
  },
  setup() {
    const info = HomeObserver.getInfo()

    onMounted(() => {
      HomeObserver.requestInfo()
    })

    return {
      info
    }
  }
})
</script>

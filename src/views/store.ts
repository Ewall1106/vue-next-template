import { reactive } from 'vue'
import { getUserInfo } from '@/api'

interface Info {
  name: string
}

class HomeInfo {
  info: Info = reactive({
    name: 'loading...'
  })

  requestInfo = () => {
    getUserInfo().then(res => {
      const name = res.data.name
      Object.assign(this.info, { name })
    })
  }

  getInfo = () => {
    return this.info
  }
}

const HomeObserver = new HomeInfo()

export default HomeObserver

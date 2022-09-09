import { reactive } from 'vue'

class HomeInfo {
  info: any = reactive({
    name: '....'
  })
}

const FormObserver = new HomeInfo()

export default FormObserver

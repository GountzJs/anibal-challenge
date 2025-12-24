import router from '@app/router'
import { createApp } from 'vue'
import App from './App.vue'

async function initMock() {
  if (import.meta.env.NODE_ENV !== 'development') return

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

initMock().then(() => {
  const app = createApp(App)

  app.use(router)

  app.mount('#app')
})

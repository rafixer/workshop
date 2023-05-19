import App from './app/index.svelte'

const initApp = () => {
  const config = {
    target: document.querySelector('#app')
  }

  return new App(config)
}

initApp()

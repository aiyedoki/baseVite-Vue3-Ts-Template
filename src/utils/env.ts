export {}
declare global {
  interface Window {
    BASE_URL: any
  }
}

window.BASE_URL = (function () {
  if (import.meta.env.MODE === 'development') {
    return 'http://127.0.0.1:2333/api'
  } else {
    return 'http://119.29.147.193:2333/api'
  }
})()

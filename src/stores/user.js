import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  const user = ref(0)
  const loged = ref(true)
  const apiKEY= '3e0ed96f7a7d4108a8f30c26cea249e7'
  


  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { user, loged, apiKEY}
})

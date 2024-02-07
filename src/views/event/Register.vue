<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { defineProps, inject } from 'vue'

// eslint-disable-next-line vue/no-setup-props-destructure
const { event } = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  GStore.flashMessage = 'You are successfullly registered for' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.replace({
    name: 'EventDetails',
  })
}
</script>
<template>
  <p>Regstration form here</p>
  <button @click="register">Register Me!</button>
</template>

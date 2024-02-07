<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'

// eslint-disable-next-line vue/no-setup-props-destructure
defineProps(['evenet'])
const router = useRouter()

const register = () => {
  // If registration API call is successful
  // Push back to the event details
  router.replace({
    name: 'EventDetails',
  })
}
</script>
<template>
  <p>Regstration form here</p>
  <button @click="register">Register Me!</button>
</template>

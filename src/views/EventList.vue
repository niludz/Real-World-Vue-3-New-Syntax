<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import router from '../router'

const props = defineProps(['page'])

const events = ref('')
const totalEvents = ref(0)

const page = computed(() => props.page)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  // EventService.getEvents()
  //   .then((response) => {
  //     events.value = response.data
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        router.push({ name: 'NetwirkError' })
        console.log(error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>

import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/niludz/Real-World-Vue-3-New-Syntax',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  // getEvents() {
  //   return apiClient.get('/events')
  // },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
}

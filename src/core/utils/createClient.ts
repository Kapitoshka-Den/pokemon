import axios from 'axios'

export const client = axios.create()
client.interceptors.request.use(
  (response) => response,
  (error) => console.log(error),
)

import axios from 'axios'

const request = axios.create({
  baseURL: '@/public/data'
})
export default request

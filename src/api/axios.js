import axios from 'axios'

const apiURL = 'http://localhost:4444'

export default axios.create({
  //withCredentials: true,
  baseURL: apiURL,
  //headers: { 'API-KEY': 'key' }, // fix
})

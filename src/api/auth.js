import axios from './axios'

export const usersAPI = {
  register(fullName, email, password, imageUrl = '') {
    return axios.post('/auth/register', {
      fullName,
      email,
      password,
      imageUrl,
    })
  },
  login(email, password) {
    return axios.post('/autn/login', {
      email,
      password,
    })
  },
  getMe() {
    return axios.get('/auth/me')
  },
}

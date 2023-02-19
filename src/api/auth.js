import axios from 'axios'

const apiURL = '4444' // fix

const instance = axios.create({
  withCredentials: true,
  baseURL: apiURL,
  headers: { 'API-KEY': 'key' }, // fix
})

export const usersAPI = {
  register(fullName, email, password, imageUrl = '') {
    return instance.post('/auth/register', {
      fullName,
      email,
      password,
      imageUrl,
    })
  },
  login(email, password) {
    return instance.post('/autn/login', {
      email,
      password,
    })
  },
  getMe() {
    return instance.get('/auth/me')
  },
}

//const apiURL = 'https://social-network.samuraijs.com/api/1.0/'

//const instance = axios.create({
//  withCredentials: true,
//  baseURL: apiURL,
//  headers: { 'API-KEY': '53aeea98-f6b5-4e36-a084-68902275c709' },
//})

//export const usersAPI = {
//  getUsers(currentPage: number, pageSize: number) {
//    return instance.get < UsersResponceType > `users?page=${currentPage}&count=${pageSize}`
//    //! .then((response) => response.data)
//  },
//  follow(userId: number) {
//    return instance.post(`follow/${userId}`) //! .then((responce) => responce.data)
//  },
//  unfollow(userId: number) {
//    return instance.delete(`follow/${userId}`) //! .then((responce) => responce.data)
//  },
//}

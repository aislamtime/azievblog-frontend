import axios from './axios'

export const postsAPI = {
  getAllPosts() {
    return axios.get('/posts')
  },
  getOnePost(_id) {
    return axios.get(`/posts/${_id}`)
  },
  create(data) {
    return axios.post('/posts', { ...data })
  },
  update(_id, data) {
    return axios.patch(`/posts/${_id}`, { ...data })
  },
  getNewTags() {
    return axios.get('/tags')
  },
}

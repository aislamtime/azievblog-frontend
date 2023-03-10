import { createSlice } from '@reduxjs/toolkit'
import { fetchOnePost, fetchPosts, fetchTags } from './asyncActions'

const initialState = {
  fullPost: {
    post: {},
    status: 'loading',
  },
  posts: {
    items: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts.items = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.items = []
      state.posts.status = 'loading'
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload.reverse()
      state.posts.status = 'success'
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = []
      state.posts.status = 'error'
    })
    builder.addCase(fetchTags.pending, (state) => {
      state.tags.items = []
      state.tags.status = 'loading'
    })
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags.items = action.payload
      state.tags.status = 'success'
    })
    builder.addCase(fetchTags.rejected, (state) => {
      state.tags.items = []
      state.tags.status = 'error'
    })
    builder.addCase(fetchOnePost.pending, (state) => {
      state.fullPost.post = {}
      state.fullPost.status = 'loading'
    })
    builder.addCase(fetchOnePost.fulfilled, (state, action) => {
      state.fullPost.post = action.payload
      state.fullPost.status = 'success'
    })
    builder.addCase(fetchOnePost.rejected, (state) => {
      state.fullPost.post = {}
      state.fullPost.status = 'error'
    })
  },
})

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer

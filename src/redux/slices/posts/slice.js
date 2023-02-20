import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './asyncActions'

const initialState = {
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
  },
})

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer

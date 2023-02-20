import { createAsyncThunk } from '@reduxjs/toolkit'
import { postsAPI } from '../../../api/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await postsAPI.getAllPosts()
  return data
})

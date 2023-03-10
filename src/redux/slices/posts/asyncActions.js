import { createAsyncThunk } from '@reduxjs/toolkit'
import { postsAPI } from '../../../api/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await postsAPI.getAllPosts()
  return data
})

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const { data } = await postsAPI.getNewTags()
  return data
})

export const fetchOnePost = createAsyncThunk('posts/fetchOnePost', async (id) => {
  const { data } = await postsAPI.getOnePost(id)
  return data
})

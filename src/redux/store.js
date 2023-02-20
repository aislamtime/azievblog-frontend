import { configureStore } from '@reduxjs/toolkit'

import auth from './slices/auth/slice'
import posts from './slices/posts/slice'

export const store = configureStore({
  reducer: {
    auth,
    posts,
  },
})

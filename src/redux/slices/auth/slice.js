import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const authSlice = createSlice({
  namge: 'auth',
  initialState,
  reducers: {
    register(state, action) {},
  },
})

export const { register } = authSlice.actions
export default authSlice.reducer

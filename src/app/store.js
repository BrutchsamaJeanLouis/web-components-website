import { configureStore } from '@reduxjs/toolkit'
import sessionReducers from './sessionSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducers
  }
})

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userEmail: '',
  userId: 0,
  isLoggedIn: false,
  sideMenuOpened: false
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserEmail: (state, action) => {
      console.log('userLoggedInAs', action.payload)
      state.userEmail = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setSideMenuOpened: (state, action) => {
      state.sideMenuOpened = action.payload
    }
  }
})

export const {
  setUserEmail,
  setUserId,
  setIsLoggedIn,
  setSideMenuOpened
} = sessionSlice.actions

export default sessionSlice.reducer

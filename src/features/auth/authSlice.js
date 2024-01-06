import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: { email: null },
    token: null,
    isLoggedIn: false,
   // isRefreshing: false,
  };


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            state.isLoggedIn = true
        },
        logOut: (state) => {
            state.user = null
            state.token = null
            state.isLoggedIn = null
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn //for testing
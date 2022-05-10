import { createSlice } from '@reduxjs/toolkit'

export const Login = createSlice({
  name: 'login',
  initialState: {
    Email: "",
    Password: ""
  },
  reducers: {
    UserLogin: (state,action) => {
      state.Email = action.payload.Email;
      state.Password = action.payload.Password
    }
  }
})

// Action creators are generated for each case reducer function
export const { UserLogin } = Login.actions

export default Login.reducer
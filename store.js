import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './reducers/login';
import GridReducer from './reducers/grid';

export default configureStore({
  reducer: {
    Login:LoginReducer,
    Grid:GridReducer
  }
})
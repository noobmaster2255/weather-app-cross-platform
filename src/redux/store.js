import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'

export default store = configureStore({
  reducer: {
    weather: weatherReducer
  }
});
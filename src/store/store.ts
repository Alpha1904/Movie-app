import { configureStore } from '@reduxjs/toolkit'
import moviepmReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    movieoData : moviepmReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
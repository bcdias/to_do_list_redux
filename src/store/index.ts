import { configureStore } from '@reduxjs/toolkit'
import tasksApi from '../service/api'

const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(tasksApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

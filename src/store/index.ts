import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks'
import tasksApi from '../service/api'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(tasksApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

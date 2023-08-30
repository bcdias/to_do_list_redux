import { configureStore } from '@reduxjs/toolkit'
import tasksApi from '../service/api'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(tasksApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

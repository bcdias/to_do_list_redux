import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../util/enums/Tasks'

// ver como fazer esse delete via service

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: [] },
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer

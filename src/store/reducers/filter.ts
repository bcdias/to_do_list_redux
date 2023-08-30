import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilter } from '../../types'

const initialState: IFilter = {
  term: '',
  criteria: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    termChange: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    filterChange: (state, action: PayloadAction<IFilter>) => {
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    }
  }
})

export const { termChange, filterChange } = filterSlice.actions

export default filterSlice.reducer

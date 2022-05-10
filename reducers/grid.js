import { createSlice } from '@reduxjs/toolkit'

export const Grid = createSlice({
  name: 'grid',
  initialState: {
    GridData: [],
    GridColumn: []
  },
  reducers: {
    GridDataInit: (state,action) => {
      state.GridData = action.payload;
    },
    GridColumnInit: (state,action) => {
      state.GridColumn = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { GridDataInit,GridColumnInit } = Grid.actions

export default Grid.reducer
import React, { useState, useEffect } from 'react'
import { DataGrid,trTR} from '@mui/x-data-grid'
import { GridColumnInit, GridDataInit } from '../../reducers/grid';
import { useSelector, useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const columns = [
  { field: 'id', headerName: 'ID',editable: true },
  { field: 'title', headerName: 'Title', width: 300,editable: true },
  { field: 'body', headerName: 'Body', width: 600,editable: true },
  {
    field: "delete",
    width: 75,
    sortable: false,
    disableColumnMenu: true,
    renderHeader: () => {
      return (
        <button>Delete</button>
      );
    }
  }
]
const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  trTR,
);
const Grid = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        dispatch(GridColumnInit(columns));
        dispatch(GridDataInit(data))
      })
  }, [])
  const dispatch = useDispatch()
  const GridData = useSelector(state => state.Grid.GridData)
  const GridColumn = useSelector(state => state.Grid.GridColumn)
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={GridData}
        columns={GridColumn}
        pageSize={12}
        checkboxSelection
        theme={theme}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  )
}
export default Grid;
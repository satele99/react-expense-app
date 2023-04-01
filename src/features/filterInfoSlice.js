import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'Show All'
}

export const filterInfoSlice = createSlice({
    name: 'filter', 
    initialState,
    reducers: {
        filterParam: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { filterParam } = filterInfoSlice.actions
export const getFilter = (state) => state.filter.value

export default filterInfoSlice.reducer
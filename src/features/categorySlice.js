import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addCategory } = categorySlice.actions;
export const getCategories = (state) => state.category.value;

export default categorySlice.reducer;
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const { addExpense } = expenseSlice.actions;
export const getExpenses = (state) => state.expense.value;

export default expenseSlice.reducer;
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
        },
        deleteExpense: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addExpense, deleteExpense } = expenseSlice.actions;
export const getExpenses = (state) => state.expense.value;

export default expenseSlice.reducer;
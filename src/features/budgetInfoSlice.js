import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        totalBudget: 0,
        currentTotalSpent: 0,
    }
};

export const budgetInfoSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setTotalBudget: (state, action) => {
            state.value.totalBudget = action.payload;
            localStorage.setItem('budget', JSON.stringify(action.payload));
        }, 
        clearTotalBudget: (state) => {
            state.value.totalBudget = 0;
        },
        addCurrentSpent: (state, action) => {
            state.value.currentTotalSpent = action.payload;
        }
    }
});

export const { setTotalBudget, clearTotalBudget, addCurrentSpent } = budgetInfoSlice.actions;
export const getTotalBudget = (state) => state.budget.value;

export default budgetInfoSlice.reducer;

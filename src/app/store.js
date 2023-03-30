import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/signInSlice';
import callApiReducer from '../features/callApiSlice.js'
import budgetInfoReducer from '../features/budgetInfoSlice';
import categoryReducer from '../features/categorySlice';
import expenseReducer from '../features/expenseSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        callApi: callApiReducer,
        budget: budgetInfoReducer,
        category: categoryReducer,
        expense: expenseReducer,
    }
})


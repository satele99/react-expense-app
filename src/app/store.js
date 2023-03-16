import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/signInSlice';
export const store = configureStore({
    reducer: {
        modal: modalReducer,
    }
})


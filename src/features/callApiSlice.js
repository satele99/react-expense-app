import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        user: null
    }
};

export const callApiSlice = createSlice({
    name: 'callApi',
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.value.user = action.payload;
        },
        resetUser: (state) => {
            state.value.user = null;
        }
    }
})

export const { currentUser, resetUser } = callApiSlice.actions
export const loggedUser = (state)=> state.callApi.value.user;

export default callApiSlice.reducer;
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        settingModal: false,
        signInModal: false,
        sideBarOpen: false
    }
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState, 
    reducers: {
        showSettingModal: (state) => {
            state.value.settingModal = true;
        },
        closeSettingModal: (state)=> {
            state.value.settingModal = false;
        },
        showSignInModal: (state)=>{
            state.value.signInModal = true;
        }, 
        closeSignInModal: (state)=> {
            state.value.signInModal = false;
        }, 
        openSideBar: (state) => {
            state.value.sideBarOpen = !state.value.sideBarOpen
        }
    }
});

export const { showSettingModal, closeSettingModal, showSignInModal, closeSignInModal, openSideBar } = modalSlice.actions
export const setModal = (state) => state.modal.value;

export default modalSlice.reducer;
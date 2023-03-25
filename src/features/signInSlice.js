import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        settingModal: false,
        signInModal: false,
        sideBarOpen: false,
        logInOpen: false,
        signOutOpen: false,
        userProfileModal: false
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
        }, 
        openLogIn: (state) => {
            state.value.logInOpen = true;
        },
        closeLogIn: (state) => {
            state.value.logInOpen = false;
        },
        openSignOut: (state) => {
            state.value.signOutOpen = true;
        },
        closeSignOut: (state) => {
            state.value.signOutOpen = false;
        }, 
        openUserProfile: (state) => {
            state.value.userProfileModal = true;
        },
        closeUserProfile: (state) => {
            state.value.userProfileModal = false;
        }
    }
});

export const { 
    showSettingModal, 
    closeSettingModal, 
    showSignInModal, 
    closeSignInModal, 
    openSideBar, 
    openLogIn, 
    closeLogIn, 
    openSignOut, 
    closeSignOut, 
    openUserProfile,
    closeUserProfile 
} = modalSlice.actions
export const setModal = (state) => state.modal.value;

export default modalSlice.reducer;
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { showSignInModal, openLogIn } from "../features/signInSlice";


export default function NotLogged() {

    const dispatch = useDispatch();
    const openSignInModal = () => {
        dispatch(showSignInModal());
    }
    const openLogInModal = () => {
        dispatch(openLogIn());
    }
    return (
        <div style={{marginTop: '250px'}}>Please <a style={{textDecoration: 'none'}} href="#" onClick={openLogInModal} >Log In</a> or <a style={{textDecoration: 'none'}} href="#" onClick={openSignInModal}>Sign Up</a>.</div>
    )
}
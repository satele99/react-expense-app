import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn"
import LogIn from "../components/LogIn"
import NotLogged from "../components/NotLoggedIn"
import BudgetSetings from "../components/BudgetSetting"
import UserProfile from '../components/UserProfile';
import SignOut from '../components/SignOut';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { setModal } from "../features/signInSlice";
import NavBar from "../components/NavBar";

export default function Reports() {

    const loggedInUser = useSelector(loggedUser);
    const sideOpen = useSelector(setModal);
    if(loggedInUser === null){
        return (
            <div className='main'>
                <NavBar/>
                <Sidebar isActive={true}/>
            <div className="content" style={{marginLeft: sideOpen.sideBarOpen ? "300px" : "0px"}}>
                <NotLogged/>
            </div>
            <BudgetSetings/>
            <SignIn/>
            <LogIn/>
            <SignOut/>
        </div>
        )
    }
    return(
        <div className='main'>
            <NavBar/>
            <Sidebar isActive={true}/>
            <div className="content" style={{marginLeft: sideOpen.sideBarOpen ? "300px" : "0px", marginTop: '25px'}}>
                <h1>Analytics</h1>
            </div>
            <BudgetSetings/>
            <SignIn/>
            <LogIn/>
            <SignOut/>
            <UserProfile/>
        </div>
    )
}
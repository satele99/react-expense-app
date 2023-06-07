import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn"
import LogIn from "../components/LogIn"
import NotLogged from "../components/NotLoggedIn"
import UserProfile from '../components/UserProfile';
import BudgetSetings from "../components/BudgetSetting"
import SignOut from '../components/SignOut';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { setModal } from "../features/signInSlice";
import Welcome from "../components/Welcome";
import NavBar from "../components/NavBar";


export default function Expenses() {

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
    return (
        <div className='main'>
            <NavBar/>
            <Sidebar isActive={true}/>
            <div className="content" style={{marginLeft: sideOpen.sideBarOpen ? "300px" : "0px", marginTop: '25px'}}>
                <Welcome header={`${loggedInUser.firstName}'s Expense Categories`}/>
            </div>
            <BudgetSetings/>
            {/* <SignIn/> */}
            <LogIn/>
            <SignOut/>
            <UserProfile/>
        </div>
    )
}
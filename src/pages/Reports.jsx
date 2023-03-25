import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn"
import LogIn from "/Users/amirhali/repos/react-expenses/src/components/LogIn.jsx"
import NotLogged from "../components/NotLoggedIn"
import BudgetSetings from "../components/BudgetSetting"
import UserProfile from '../components/UserProfile';
import SignOut from '../components/SignOut';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';

export default function Reports() {

    const loggedInUser = useSelector(loggedUser);
    if(loggedInUser === null){
        return (
            <div className='main'>
                <Sidebar isActive={true}/>
            <div className="content">
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
            <Sidebar isActive={true}/>
            <div className="content">
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
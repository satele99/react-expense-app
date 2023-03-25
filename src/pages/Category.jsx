import BudgetSetings from "../components/BudgetSetting"
import CategoryForm from "../components/CategoryForm"
import CategoryTable from "../components/CategoryTable"
import LogIn from "/Users/amirhali/repos/react-expenses/src/components/LogIn.jsx"
import UserProfile from '../components/UserProfile';
import Sidebar from "../components/Sidebar"
import SignIn from "../components/SignIn"
import NotLogged from "../components/NotLoggedIn"
import SignOut from '../components/SignOut';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
// import { Stack } from 'react-bootstrap';

export default function Category() {
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
                <CategoryForm/>
                <CategoryTable/>
            </div>
            <BudgetSetings/>
            {/* <SignIn/> */}
            <LogIn/>
            <SignOut/>
            <UserProfile/>
        </div>
    )
}
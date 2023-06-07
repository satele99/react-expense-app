import BudgetSetings from "../components/BudgetSetting"
import CategoryForm from "../components/CategoryForm"
import CategoryTable from "../components/CategoryTable"
import LogIn from "../components/LogIn"
import UserProfile from '../components/UserProfile';
import Sidebar from "../components/Sidebar"
import SignIn from "../components/SignIn"
import NotLogged from "../components/NotLoggedIn"
import SignOut from '../components/SignOut';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { setModal } from "../features/signInSlice";
// import { Stack } from 'react-bootstrap';
import NavBar from "../components/NavBar";

export default function Category() {
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
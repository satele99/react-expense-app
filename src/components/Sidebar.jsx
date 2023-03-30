import axios from 'axios';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showSettingModal, showSignInModal, openSideBar, setModal, openSignOut, openUserProfile } from "../features/signInSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { currentUser } from "../features/callApiSlice.js";
import { setTotalBudget } from '../features/budgetInfoSlice';
import { addCategory, getCategories } from "../features/categorySlice";
import { addExpense } from '../features/expenseSlice';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Sidebar.css'

export default function Sidebar(props) {

    // const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(null)
    const dispatch = useDispatch();
    const sideOpen = useSelector(setModal);
    const user = useSelector(loggedUser);
    const categories = useSelector(getCategories);

    useEffect(()=> {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser){
            // console.log(categories[0][0].categoryName)
            const foundUser = JSON.parse(loggedInUser);
            // const budget = localStorage.getItem('budget');
            dispatch(currentUser(foundUser));
            const username = foundUser.username;
            axios.get(`http://localhost:4000/user/log/${username}`).then((response)=>{
                if(response.data != 'Not found.'){
                    dispatch(setTotalBudget(response.data.budget))
                    axios.get(`http://localhost:4000/reload-category/${foundUser.id}`).then((response)=> {
                        if(response.data !== 'Not Found.' && categories.length === 0){
                            const data = response.data;
                            data.map((item)=> {
                                dispatch(addCategory(item))
                            })
                        }
                    }).then(()=>{
                        axios.get(`http://localhost:4000/reload-expense/${foundUser.id}`).then((response)=> {
                        if(response.data !== 'Not Found.' && categories.length === 0){
                            const data = response.data;
                            data.map((item)=> {
                                dispatch(addExpense(item))
                            })
                        }
                        })
                    })
                }
            })
        }
    }, [])

    const toggle = () => {
        dispatch(openSideBar())
        
    }
    const openSettingModal = () => {
        dispatch(showSettingModal())
    }
    const openSignInModal = () => {
        if(user === null){
            dispatch(showSignInModal());
        }else{
            dispatch(openUserProfile());
        }
    }
    const openSignOutModal = () => {
        if(user != null){
            dispatch(openSignOut());
        }else{
            alert('Please sign in or create an account.');
        }
    }

    const navItem = [
        {
        path: '/',
        icon: <i class="bi bi-house-door"></i>,
        linkText: 'Home'
        },
    {
        path: '/category',
        icon: <i class="bi bi-wallet"></i>,
        linkText: 'Budget'
    },
    {
        path: '/expenses',
        icon: <i class="bi bi-pie-chart"></i>,
        linkText: 'Expenses'
    },
    {
        path: '/reports',
        icon: <i class="bi bi-graph-up-arrow"></i>,
        linkText: 'Analytics'
    },
    ]

    return (
        <div className="side-container">
            <div style={{width: sideOpen.sideBarOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section" style={{justifyContent: sideOpen.sideBarOpen ? "center": "none"}}>
                    <h1 className="logo" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>Budget App</h1>
                    <div className="bar" style={{marginLeft: sideOpen.sideBarOpen ? "90px" : "0px", display: sideOpen.sideBarOpen ? "flex":"block"}}>
                    <i class="bi bi-list" onClick={toggle}></i>
                    </div>
                </div>
                {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} onClick={()=>setActive(item)} className={`link ${active === item && 'active'}`}>
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>{item.linkText}</div>
                        </Link>
                    ))
                }
                <div className="footer" style={{flexDirection: sideOpen.sideBarOpen ? "row" : "column", justifyContent: sideOpen.sideBarOpen ? "center" : "none",marginTop: sideOpen.sideBarOpen ? "270px" : "170px", fontSize: sideOpen.sideBarOpen ? "30px" : "20px"}}>
                    <i class="bi bi-person-circle profile" onClick={openSignInModal}></i>
                    <i class="bi bi-gear-fill profile" onClick={openSettingModal}></i>
                    <i class="bi bi-box-arrow-left profile" onClick={openSignOutModal}></i>
                </div>
            </div>
        </div>
    )
}
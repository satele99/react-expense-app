import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSettingModal, showSignInModal, openSideBar, setModal, openSignOut, openUserProfile } from "../features/signInSlice";
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import axios from 'axios';
import { currentUser } from "../features/callApiSlice.js";
import { setTotalBudget } from '../features/budgetInfoSlice';
import { addCategory, getCategories } from "../features/categorySlice";
import { addExpense } from '../features/expenseSlice';
import { useEffect } from "react";

export default function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(loggedUser);
    const categories = useSelector(getCategories);
    const serverApi = 'https://amir-react-expenses-node.onrender.com'

    useEffect(()=> {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser){
            // console.log(categories[0][0].categoryName)
            const foundUser = JSON.parse(loggedInUser);
            // const budget = localStorage.getItem('budget');
            dispatch(currentUser(foundUser));
            const username = foundUser.username;
            axios.get(`${serverApi}/user/log/${username}`).then((response)=>{
                if(response.data != 'Not found.'){
                    dispatch(setTotalBudget(response.data.budget))
                    axios.get(`${serverApi}/reload-category/${foundUser.id}`).then((response)=> {
                        if(response.data !== 'Not Found.' && categories.length === 0){
                            const data = response.data;
                            data.map((item)=> {
                                dispatch(addCategory(item))
                            })
                        }
                    }).then(()=>{
                        axios.get(`${serverApi}/reload-expense/${foundUser.id}`).then((response)=> {
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
        icon: <i class="bi bi-grid-3x3-gap-fill"></i>,
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
    }
    ]
    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary topNav" style={{backgroundColor: '#000', marginBottom: '2rem'}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color: '#fff'}}>Wallet App</a>
            <button class="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list bar" style={{color: '#fff'}}></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.linkText}</div>
                        </Link>
                    ))
            }
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', color: '#fff', fontSize: '20px'}}>
                <i class="bi bi-person-circle profile" onClick={openSignInModal}></i>
                <i class="bi bi-gear-fill profile" onClick={openSettingModal}></i>
                <i class="bi bi-box-arrow-left profile" onClick={openSignOutModal}></i>
            </div>
            </ul>
            </div>
        </div>
    </nav>
    )
}
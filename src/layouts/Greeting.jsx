// import CreateAccount from "../components/CreateAccount";
import Welcome from "../components/Welcome";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import NotLogged from "../components/NotLoggedIn";
import { useEffect } from "react";
import { currentUser } from "../features/callApiSlice.js";
import { setTotalBudget } from '../features/budgetInfoSlice';
import axios from 'axios';


export default function Greeting() {

    const dispatch = useDispatch();

    useEffect(()=> {
        const loggedInUser = localStorage.getItem("user");
        
        if(loggedInUser){
            const foundUser = JSON.parse(loggedInUser);
            // const budget = localStorage.getItem('budget');
            dispatch(currentUser(foundUser));
            const username = foundUser.username;
            axios.get(`http://localhost:4000/user/log/${username}`).then((response)=>{
                if(response.data != 'Not found.'){
                    dispatch(setTotalBudget(response.data.budget))
                }
            })
        }
    }, [])
    const user = useSelector(loggedUser);
    
    if(user === null){
        return (
            <NotLogged/>
        )
    }else {
        return <Welcome/>
    }
    
}
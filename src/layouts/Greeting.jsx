import Welcome from "../components/Welcome";
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import NotLogged from "../components/NotLoggedIn";


export default function Greeting() {

    const user = useSelector(loggedUser);
    
    if(user === null){
        return (
            <NotLogged/>
        )
    }else {
        return <Welcome header={`Welcome ${user.firstName}!`}/>
    }
    
}
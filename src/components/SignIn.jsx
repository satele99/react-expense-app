// import 'C:\Users\satel\repos\react-expense-app\src\css-folder\SignIn.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setModal, closeSignInModal, openLogIn } from '../features/signInSlice';
import { currentUser } from '../features/callApiSlice';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';


export default function SignIn() {
   
    const userForm = document.getElementById('form');
    const serverApi = 'https://amir-react-expenses-node.onrender.com'
    
    const dispatch = useDispatch();
    const hide = () => {
        dispatch(closeSignInModal());
    }
    const close = (event) => {
        event.preventDefault();
        const username = document.getElementById('usernames');
        const password = document.getElementById('passwords');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const user = {
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
        axios.post(`${serverApi}/user`, user).then((response)=> {
            console.log('in api call before conditional');
            if(response.data === 'Success.'){
                axios.get(`${serverApi}/user/log/${user.username}`).then((response)=> {
                    if(response.data === 'Not found.'){
                        alert('no user')
                    }else{
                        dispatch(closeSignInModal());
                        localStorage.setItem('user', JSON.stringify(response.data));
                        dispatch(currentUser(response.data));
                        // dispatch(setTotalBudget(response.data.budget));
                    }
                })
            }
        })
        console.log(user);
    }
    const closeAndOpen = () => {
        dispatch(closeSignInModal());
        dispatch(openLogIn());
    }
    const modal = useSelector(setModal);
    if(modal.signInModal === false){
        return null
    }
    return (
        <>
            <Modal show={modal.signInModal} onHide={hide} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create An Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form id='form' onSubmit={close}>
                    <div class='names'>
                        <input id='firstName' class="form-control me-2" type="text" placeholder="First Name" required/>
                        <input id='lastName' class="form-control me-2" type="text" placeholder="Last Name" required/>
                    </div>
                    <br/>
                    <input id='usernames' class="form-control me-2" type="text" placeholder="Create Username" aria-label="Search" required/>
                    <br/>
                    <input class="form-control me-2" type="password" placeholder="Create Password" aria-label="Search" required/>
                    <br/>
                    <input id='passwords' class="form-control me-2" type="password" placeholder="Verify Password" aria-label="Search" required/>
                    <br/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <div class="d-grid gap-2 col-6 mx-auto footer">
                    <Button className="button" form='form' type='submit'>Create Account</Button>
                    <p style={{textAlign: 'center'}}>Have An Account Already? <a class='anchor' onClick={closeAndOpen}>Log In.</a></p>
                </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
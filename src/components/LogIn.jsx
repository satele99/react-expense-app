import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { setModal, closeLogIn, showSignInModal } from '../features/signInSlice';
import { setTotalBudget } from '../features/budgetInfoSlice';
import { getCategories, addCategory } from '../features/categorySlice';
import { currentUser } from '../features/callApiSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import axios from 'axios';

export default function LogIn() {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const close = (event) => {
        event.preventDefault();
        const username = document.getElementById('user1');
        const password = document.getElementById('password3');
        const user = {
            username: username.value,
            password: password.value
        }
        axios.get(`http://localhost:4000/user/log/${user.username}`).then((response)=> {
            if(response.data !== 'Not found.'){
                dispatch(closeLogIn());
                localStorage.setItem('user', JSON.stringify(response.data));
                dispatch(currentUser(response.data));
                dispatch(setTotalBudget(response.data.budget));
                axios.get(`http://localhost:4000/reload-category/${response.data.id}`).then((response)=> {
                        if(response.data !== 'Not Found.' && categories.length === 0 ){
                            console.log('hello')
                            response.data.map((item)=> {
                                dispatch(addCategory(item))
                            })
                        }
                    })
            }else{
                alert('no user')
            }
        })
    }
    const hide = ()=>{
        dispatch(closeLogIn());
    }
    const closeAndOpen = () => {
        dispatch(closeLogIn());
        dispatch(showSignInModal());
    }
    const modal = useSelector(setModal);
    if(modal.logInOpen === false){
        return null
    }
    return (
        <Modal show={modal.logInOpen} onHide={hide} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <input id='user1' class="form-control me-2" type="text" placeholder="Enter Username" aria-label="Search"/>
                    <br/>
                    <input id='password3' class="form-control me-2" type="password" placeholder="Enter Password" aria-label="Search"/>
                    <br/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <div class="d-grid gap-2 col-6 mx-auto footer">
                        <Button className="button" onClick={close}>Login</Button>
                        <p style={{textAlign: 'center'}}>Don't Have An Account? <a class='anchor' onClick={closeAndOpen}>Create One.</a></p>
                </div>
                <div></div>
                </Modal.Footer>
        </Modal>
    )
}
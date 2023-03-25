import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { useDispatch } from "react-redux";
import { closeUserProfile, setModal } from '../features/signInSlice';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


export default function UserProfile(){
    const dispatch = useDispatch();
    const modal = useSelector(setModal);
    const loggedInUser = useSelector(loggedUser)
    const hide = ()=>{
        dispatch(closeUserProfile());
    }

    if(modal.userProfileModal === false){
        return null
    }
    return (
        <Modal show={modal.userProfileModal} onHide={hide} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>{loggedInUser.firstName} - Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    Username: <input type='text' class="form-control me-2" value={loggedInUser.username}/>
                    Password: <input type='password' class="form-control me-2" value={loggedInUser.password}/>
                    <br/>
                    First Name: <input type='text' class="form-control me-2" value={loggedInUser.firstName}/>
                    Last Name: <input type='text' class="form-control me-2" value={loggedInUser.lastName}/>
                    <br/>
                    Total Budget: <input type='text' class="form-control me-2" value={'$2000'}/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <div class="d-grid gap-2 col-6 mx-auto footer">
                        <Button className="button" onClick={hide}>Close</Button>
                </div>
                </Modal.Footer>
        </Modal>
    )
}
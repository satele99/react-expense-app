import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
import { useDispatch } from "react-redux";
import { closeUserProfile, setModal } from '../features/signInSlice';
import { getTotalBudget } from '../features/budgetInfoSlice.js';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function UserProfile(){
    const dispatch = useDispatch();
    const modal = useSelector(setModal);
    const loggedInUser = useSelector(loggedUser);
    const totalBudget = useSelector(getTotalBudget);
    const [display, setDisplay] = useState('Show');
    const [type, setType] = useState('password');

    const showAndHide = ()=> {
        if(display === 'Show'){
            setType('text');
            setDisplay('Hide');
        }else{
            setType('password');
            setDisplay('Show');
        }
    }
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
                {/* <input type='password' class="form-control me-2" value={loggedInUser.password} disabled/> */}
                <form>
                    Username: <input type='text' class="form-control me-2" value={loggedInUser.username} disabled/>
                    Password:  <div class="input-group mb-3">
                                    <input type={type} class="form-control" value={loggedInUser.password} aria-label="Recipient's username" aria-describedby="basic-addon2" disabled/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" onClick={showAndHide}>{display}</button>
                                    </div>
                                </div>
                    <br/>
                    First Name: <input type='text' class="form-control me-2" value={loggedInUser.firstName} disabled/>
                    Last Name: <input type='text' class="form-control me-2" value={loggedInUser.lastName} disabled/>
                    <br/>
                    Total Budget: <input type='text' class="form-control me-2" value={totalBudget.totalBudget} disabled/>
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
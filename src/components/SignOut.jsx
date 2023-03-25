import { Button } from 'react-bootstrap';
import { closeSignOut, openSignOut, setModal } from '../features/signInSlice';
import { clearTotalBudget } from '../features/budgetInfoSlice';
import { resetUser } from '../features/callApiSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function SignOut() {
    const dispatch = useDispatch();
    const hide = ()=>{
        dispatch(closeSignOut());
    }
    const logout = () => {
        localStorage.clear();
        dispatch(resetUser());
        dispatch(closeSignOut());
        dispatch(clearTotalBudget());
    }
    const modal = useSelector(setModal)
    if(modal.signOutOpen === false){
        return null
    }

    return (
        <Modal show={modal.signOutOpen} onHide={hide} animation={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign: 'center'}}>Do you want to Sign Out?</Modal.Title>
                </Modal.Header>
                <Modal.Footer style={{justifyContent: 'center'}}>
                    <Button className="button" onClick={logout}>Yes</Button>
                    <Button className="button" onClick={hide}>No</Button>
                </Modal.Footer>
            </Modal>
    )
}
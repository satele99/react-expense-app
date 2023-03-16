import '/Users/amirhali/repos/react-expenses/src/css-folder/SignIn.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setModal, closeSignInModal } from '../features/signInSlice';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';


export default function SignIn() {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const close = (event) => {
        dispatch(closeSignInModal());
    }
    const modal = useSelector(setModal);
    if(modal.signInModal === false){
        return null
    }
    return (
        <>
            <Modal show={modal.signInModal} onHide={close} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Create An Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div class='names'>
                        <input class="form-control me-2" type="text" placeholder="First Name"/>
                        <input class="form-control me-2" type="text" placeholder="Last Name"/>
                    </div>
                    <br/>
                    <input class="form-control me-2" type="text" placeholder="Create Username" aria-label="Search"/>
                    <br/>
                    <input class="form-control me-2" type="password" placeholder="Create Password" aria-label="Search"/>
                    <br/>
                    <input class="form-control me-2" type="password" placeholder="Verify Password" aria-label="Search"/>
                    <br/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <div class="d-grid gap-2 col-6 mx-auto footer">
                        <Button className="button" onClick={close}>Create Account</Button>
                        <p>Have An Account Already? <a class='anchor'>Log In.</a></p>
                </div>
                <div></div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
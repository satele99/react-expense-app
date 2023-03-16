import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { setModal, closeSettingModal } from '../features/signInSlice';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';

export default function BudgetSetings() {

    const currentBudget = '$2000'
    const [open, setOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [exOpen, setExOpen] = useState(false);
    const dispatch = useDispatch();
    const close = (event) => {
        dispatch(closeSettingModal());
    }
    const modal = useSelector(setModal);
    if(modal.settingModal === false){
        return null
    }
    return (
        <Modal show={modal.settingModal} onHide={close} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title style={{marginLeft: '150px'}}>Budget Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>
                    <div className='settings-tab'>
                        <h5 onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Set Total Budget</h5> 
                        <span><i class="bi bi-caret-down"></i></span>
                    </div>
                    <Collapse in={open}>
                            <div id='set-budget'>
                                Amount: <input class="form-control mr-sm-2" type='text'/>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                    <Button className='button'>Save Changes</Button>
                                </div>
                            </div>
                    </Collapse>
                </div>
                <div>
                    <div className='settings-tab'>
                        <h5 onClick={() => setCatOpen(!catOpen)} aria-controls="example-collapse-text" aria-expanded={open}>Set Categories</h5> 
                        <span><i class="bi bi-caret-down"></i></span>
                    </div>
                    <Collapse in={catOpen}>
                        <div id='set-category'>
                            Amount: <input class="form-control mr-sm-2" type='text'/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                <Button className='button'>Save Changes</Button>
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <div className='settings-tab'>
                        <h5 onClick={() => setExOpen(!exOpen)} aria-controls="example-collapse-text" aria-expanded={open}>Set Expenses</h5> 
                        <span><i class="bi bi-caret-down"></i></span>
                    </div>
                    <Collapse in={exOpen}>
                        <div id='set-expense'>
                            Amount: <input class="form-control mr-sm-2" type='text'/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                <Button className='button'>Save Changes</Button>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='button' style={{display: 'flex', justifyContent: 'flex-end'}} onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
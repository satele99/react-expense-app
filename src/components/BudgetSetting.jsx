import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { setModal, closeSettingModal } from '../features/signInSlice';
import { loggedUser } from '../features/callApiSlice';
import { setTotalBudget } from '../features/budgetInfoSlice';
import { addCategory } from '../features/categorySlice';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function BudgetSetings() {

    const currentBudget = '$2000'
    const [open, setOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [exOpen, setExOpen] = useState(false);
    const dispatch = useDispatch();
    const modal = useSelector(setModal);
    const user = useSelector(loggedUser);
    const close = (event) => {
        dispatch(closeSettingModal());
    }
    const setBudget = (event)=> {
        event.preventDefault();
        const amount = document.getElementById('total-budget').value;
        axios.put(`http://localhost:4000/total-budget/${user.username}/${amount}`).then((response)=>{
            if(response.data === 'Budget updated.'){
                dispatch(setTotalBudget(amount));
                alert(`budget for ${user.username} updated`);
            }else{
                alert('unsuccessful');
            }
        })

    }
    const setCategory = (event) => {
        event.preventDefault();
        const name = document.getElementById('catName').value;
        const amount = document.getElementById('catAmount').value;
        const uuid = crypto.randomUUID()
        const data = {
            username: user.username,
            category: name,
            catAmount: amount,
            uuid: uuid
        }
        axios.post(`http://localhost:4000/category`, data).then((response)=> {
            if(response.data != 'error'){
                console.log('success')
                dispatch(addCategory(response.data))
            }
        })
    }
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
                            <form id='set-budget' onSubmit={setBudget}>
                                Total Amount: <input class="form-control mr-sm-2" id='total-budget' type='number'/>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                    <Button className='button' form='set-budget' type='submit'>Save Changes</Button>
                                </div>
                            </form>
                    </Collapse>
                </div>
                <div>
                    <div className='settings-tab'>
                        <h5 onClick={() => setCatOpen(!catOpen)} aria-controls="example-collapse-text" aria-expanded={open}>Set Categories</h5> 
                        <span><i class="bi bi-caret-down"></i></span>
                    </div>
                    <Collapse in={catOpen}>
                        <form id='set-category' onSubmit={setCategory}>
                            Category Name: <input id='catName' class="form-control mr-sm-2" type='text'/>
                            Category Budget Amount: <input id='catAmount' class="form-control mr-sm-2" type='number'/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                <Button className='button' form='set-category' type='submit'>Save Changes</Button>
                            </div>
                        </form>
                    </Collapse>
                </div>
                <div>
                    <div className='settings-tab'>
                        <h5 onClick={() => setExOpen(!exOpen)} aria-controls="example-collapse-text" aria-expanded={open}>Set Expenses</h5> 
                        <span><i class="bi bi-caret-down"></i></span>
                    </div>
                    <Collapse in={exOpen}>
                        <form id='set-expense'>
                            Add Expense To: <Form.Select aria-label="Default select example">
                                                <option value='0'>Zero</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                            Expense Name: <input class="form-control mr-sm-2" type='text'/>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
                                <Button className='button'>Save Changes</Button>
                            </div>
                        </form>
                    </Collapse>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='button' style={{display: 'flex', justifyContent: 'flex-end'}} onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getTotalBudget, addCurrentSpent } from '../features/budgetInfoSlice';
import { getExpenses } from '../features/expenseSlice';
import { showSettingModal } from "../features/signInSlice";
import { Button, Stack } from 'react-bootstrap';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'
import { getCategories } from '../features/categorySlice';
import { Link } from 'react-router-dom';

export default function CardBox() {

    const dispatch = useDispatch();
    const budget = useSelector(getTotalBudget);
    const categories = useSelector(getCategories);
    const expenses = useSelector(getExpenses)
    const currentSum = expenses.reduce((total, item)=> {return total + parseFloat(item.expenseAmount)}, 0)
    
    dispatch(addCurrentSpent(currentSum));
    const available = budget.totalBudget - currentSum

    const openSettingModal = () => {
        
        dispatch(showSettingModal())
    }
    const formatThis = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    return (
        <Card className='cardbox'>
            <Card.Body>
                <Card.Title>
                    Max Budget
                    <Card.Subtitle className="text-muted">Spent {formatThis.format(currentSum)} of your Total Budget({formatThis.format(budget.totalBudget)}) </Card.Subtitle>
                </Card.Title>
                <Card.Text>
                    <div>Total Amount Available: {formatThis.format(available)}</div>
                </Card.Text>
                <Stack direction='horizontal' gap={2} className="row-md-5 mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
                    <Link class="btn btn-outline-info blackf" onClick={()=>{openSettingModal()}}>Go To Settings</Link>
                </Stack>
            </Card.Body>
        </Card>
    )
}
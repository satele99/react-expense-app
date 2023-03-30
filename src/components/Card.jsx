import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getTotalBudget } from '../features/budgetInfoSlice';
import { showSettingModal } from "../features/signInSlice";
import { Button, Stack } from 'react-bootstrap';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'
import { getCategories } from '../features/categorySlice';

export default function CardBox() {

    const dispatch = useDispatch();
    const budget = useSelector(getTotalBudget);
    const categories = useSelector(getCategories);
    console.log(categories);
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
                    Budget
                    <Card.Subtitle className="text-muted">Total usage of current total budget</Card.Subtitle>
                </Card.Title>
                <Card.Text>
                    <div>200 / {formatThis.format(budget.totalBudget)}</div>
                </Card.Text>
                <Stack direction='horizontal' gap={2} className="row-md-5 mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
                    <Button className='button' onClick={()=>{openSettingModal()}}>Go To Settings</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}
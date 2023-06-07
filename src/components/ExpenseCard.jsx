import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showSettingModal } from '../features/signInSlice';
// import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'

export default function ExpenseCard(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openSettingModal = () => {
        dispatch(showSettingModal())
    }
    const routeChange = (string) => {
        let path = string;
        navigate(path);
    }
    const formatThis = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    
    return (
        <Card className='cardbox'>
            <Card.Body>
                <Card.Title>
                    {props.name}
                    <Card.Subtitle className="text-muted"><div>Spent {formatThis.format(props.spent)} of your {formatThis.format(props.budget)} budget. </div></Card.Subtitle>
                </Card.Title>
                <Card.Text>
                    <ProgressBar className='rounded-pill' min={0} max={props.budget} now={props.spent}/>
                </Card.Text>
                <Stack direction='horizontal' gap={2} className="row-md-5 mx-auto" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link class="btn btn-outline-info blackf" onClick={openSettingModal}>Add Expense</Link>
                    <Link class="btn btn-outline-info blackf" to={'/category'}>View Expenses</Link>
                </Stack>
            </Card.Body>
        </Card>
    )
}
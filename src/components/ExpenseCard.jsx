import Card from 'react-bootstrap/Card';
import { ProgressBar, Button, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'

export default function ExpenseCard(props) {

    const navigate = useNavigate();
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
                    <Button className='button' onClick={()=>{routeChange("category")}}>View Expenses</Button>
                    <Button className='button' onClick={()=>{routeChange("expenses")}}>View Category</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}
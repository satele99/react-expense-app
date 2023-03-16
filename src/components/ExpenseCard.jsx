import Card from 'react-bootstrap/Card';
import { ProgressBar, Button, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'

export default function ExpenseCard() {

    const navigate = useNavigate();
    const routeChange = (string) => {
        let path = string;
        navigate(path);
    }
    return (
        <Card className='cardbox'>
            <Card.Body>
                <Card.Title>
                    Individual Expense Name
                    <Card.Subtitle className="text-muted">Current amount used of this expense budget.</Card.Subtitle>
                </Card.Title>
                <Card.Text>
                    <div>200 / 1000</div>
                    <ProgressBar className='rounded-pill' min={0} max={500} now={200}/>
                </Card.Text>
                <Stack direction='horizontal' gap={2} className="row-md-5 mx-auto" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button className='button' onClick={()=>{routeChange("expenses")}}>View Expenses</Button>
                    <Button className='button' onClick={()=>{routeChange("category")}}>View Category</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}
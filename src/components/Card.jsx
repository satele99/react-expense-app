import Card from 'react-bootstrap/Card';
import { ProgressBar } from 'react-bootstrap';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Card.css'

export default function CardBox() {
    return (
        <Card className='cardbox'>
            <Card.Body>
                <Card.Title>
                    Budget
                    <Card.Subtitle className="text-muted">Total usage of current total budget</Card.Subtitle>
                </Card.Title>
                <Card.Text>
                    <div>200 / 1000</div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
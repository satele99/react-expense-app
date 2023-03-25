import CardBox from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Welcome.css'
import ExpenseCard from './ExpenseCard';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';

export default function Welcome() {
    const loggedInUser = useSelector(loggedUser)
    return (
       <Container className='widget-container'>
        <Stack gap={4}>
            <h1>Welcome {loggedInUser.firstName}!</h1>
            <Row>
                <Col sm={true} className='widgets'><CardBox/></Col>
            </Row>
            <Row>
                <Col sm={true} className='widgets'><ExpenseCard/></Col>
                <Col sm={true} className='widgets'><ExpenseCard/></Col>
            </Row>
        </Stack>
       </Container>
    )
}
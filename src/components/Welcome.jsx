import CardBox from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Welcome.css'
import ExpenseCard from './ExpenseCard';

export default function Welcome() {
    return (
       <Container className='widget-container'>
        <Stack gap={4}>
            <h1>Welcome *user*!</h1>
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
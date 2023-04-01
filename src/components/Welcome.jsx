import CardBox from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Welcome.css'
import ExpenseCard from './ExpenseCard';
import { useSelector } from 'react-redux';
import { loggedUser } from '../features/callApiSlice.js';
// import { getCategories } from '../features/categorySlice';
import { getExpenses } from '../features/expenseSlice';
import { getCategories } from '../features/categorySlice';

export default function Welcome(props) {
    const loggedInUser = useSelector(loggedUser)
    const expenses = useSelector(getExpenses);
    const budget = useSelector(getCategories);

    function getTotalExpense(categoryName){
        return expenses.filter(item => item.expenseCategory === categoryName);
    }

    return (
       <Container className='widget-container'>
        <Stack gap={4}>
            <h1>{props.header}</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>{ props.children }</div>
            <Row>
                {
                    budget.map((item, index)=> {
                        const total = getTotalExpense(item.categoryName).reduce((total, expense) => total + parseFloat(expense.expenseAmount), 0)
                        return (
                            <Col sm={true} className='widgets'><ExpenseCard name={item.categoryName} spent={total} budget={item.categoryBudget}/></Col>
                        )
                    })
                }
            </Row>
        </Stack>
       </Container>
    )
}
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
            <Row>
                <Col sm={true} className='widgets'><CardBox/></Col>
            </Row>
            <Row>
                {
                    budget.map((item, index)=> {
                        const total = getTotalExpense(item.categoryName).reduce((total, expense) => total + parseFloat(expense.expenseAmount), 0)
                        // const result = parseFloat(total)
                        // console.log(result);
                        return (
                            <Col sm={true} className='widgets'><ExpenseCard name={item.categoryName} spent={total} budget={item.categoryBudget}/></Col>
                        )
                    })
                    
                    
                    // const limit = budget.filter(({ categoryBudget })=> categoryBudget.includes(item.expenseCategory))
                    // console.log(limit);
                }
            </Row>
        </Stack>
       </Container>
    )
}
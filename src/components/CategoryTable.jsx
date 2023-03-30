import Table from 'react-bootstrap/Table';
import '/Users/amirhali/repos/react-expenses/src/css-folder/CategoryTable.css'
import { getCategories } from '../features/categorySlice';
import { getExpenses } from '../features/expenseSlice';
import { useSelector } from 'react-redux';

export default function CategoryTable() {
    const categories = useSelector(getCategories);
    const expenses = useSelector(getExpenses);

    function getTotalExpense(categoryName){
        return expenses.filter(item => item.expenseCategory === categoryName);
    }
    const formatThis = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    return (
        <div className='table-container'>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Current Amount Spent</th>
                        <th>Total Budget</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    categories.map(item => {
                        const total = getTotalExpense(item.categoryName).reduce((total, expense) => total + expense.expenseAmount, 0)
                        const result = Number(total.toFixed(2))
                        return (
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{formatThis.format(result)}</td>
                                    <td>{formatThis.format(item.categoryBudget)}</td>
                                    <td><i style={{cursor: 'pointer'}} class="bi bi-pencil-square"></i></td>
                                    <td><i style={{cursor: 'pointer'}} class="bi bi-trash3-fill"></i></td>
                                </tr>
                        </tbody>
                        )
                    })
                }
                {/* <tbody>
                    <tr>
                        <td>1</td>
                        <td>Food</td>
                        <td>$200</td>
                        <td>$150</td>
                        <td><i style={{cursor: 'pointer'}} class="bi bi-pencil-square"></i></td>
                        <td><i style={{cursor: 'pointer'}} class="bi bi-trash3-fill"></i></td>
                    </tr>
                </tbody> */}
            </Table>
        </div>
    )
}
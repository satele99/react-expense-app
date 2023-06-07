import Table from 'react-bootstrap/Table';
// import '/Users/amirhali/repos/react-expenses/src/css-folder/CategoryTable.css'
import { useDispatch } from 'react-redux';
import { getCategories } from '../features/categorySlice';
import { getExpenses, deleteExpense } from '../features/expenseSlice';
import { getFilter } from '../features/filterInfoSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function CategoryTable() {
    const categories = useSelector(getCategories);
    const expenses = useSelector(getExpenses);
    const filterParam = useSelector(getFilter);
    const dispatch = useDispatch();
    const serverApi = 'https://amir-react-expenses-node.onrender.com'

    function getTotalExpense(categoryName){
        return expenses.filter(item => item.expenseCategory === categoryName);
    }
    const deleteThis = (uuid) => {
        axios.delete(`${serverApi}/remove-expense/${uuid}`).then((response)=> {
            if(response.data === 'Success.'){
                const remove = expenses.map(item => item.uuid).indexOf(uuid)
                if(remove != -1){
                    dispatch(deleteExpense(remove))
                }
            }
        })
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
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    expenses.map((item, index) => {
                        if(item.expenseCategory === filterParam){
                            return (
                                <tbody>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{item.expenseName}</td>
                                        <td>{item.expenseCategory}</td>
                                        <td>{formatThis.format(item.expenseAmount)}</td>
                                        <td><i style={{cursor: 'pointer'}} class="bi bi-trash3-fill" onClick={()=>{deleteThis(item.uuid)}}></i></td>
                                    </tr>
                                </tbody>
                            )
                        }else if(filterParam === 'Show All'){
                            return (
                                <tbody>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{item.expenseName}</td>
                                        <td>{item.expenseCategory}</td>
                                        <td>{formatThis.format(item.expenseAmount)}</td>
                                        <td><i style={{cursor: 'pointer'}} class="bi bi-trash3-fill" onClick={()=>{deleteThis(item.uuid)}}></i></td>
                                    </tr>
                                </tbody>
                            )
                        }
                    })
                }
            </Table>
        </div>
    )
}
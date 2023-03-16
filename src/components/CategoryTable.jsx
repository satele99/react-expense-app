import Table from 'react-bootstrap/Table';
import '/Users/amirhali/repos/react-expenses/src/css-folder/CategoryTable.css'

export default function CategoryTable() {
    return (
        <div className='table-container'>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Category Budget</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Groceries</td>
                        <td>$500</td>
                        <td><i style={{cursor: 'pointer'}} class="bi bi-pencil-square"></i></td>
                        <td><i style={{cursor: 'pointer'}} class="bi bi-trash3-fill"></i></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
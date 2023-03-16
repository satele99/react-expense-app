import BudgetSetings from "../components/BudgetSetting"
import CategoryForm from "../components/CategoryForm"
import CategoryTable from "../components/CategoryTable"
import Sidebar from "../components/Sidebar"
import SignIn from "../components/SignIn"

export default function Category() {
    return(
        <div className='main'>
            <Sidebar isActive={true}/>
            <div className="content">
                <CategoryForm/>
                <CategoryTable/>
            </div>
            <BudgetSetings/>
            <SignIn/>
        </div>
    )
}
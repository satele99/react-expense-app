import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn"


export default function Expenses() {
    return (
        <div className='main'>
            <Sidebar isActive={true}/>
            <div className="content">
                <h1>Expenses</h1>
            </div>
            <SignIn/>
        </div>
    )
}
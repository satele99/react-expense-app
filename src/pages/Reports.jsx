import Sidebar from "../components/Sidebar";
import SignIn from "../components/SignIn"

export default function Reports() {
    return(
        <div className='main'>
            <Sidebar isActive={true}/>
            <div className="content">
                <h1>Analytics</h1>
            </div>
            <SignIn/>
        </div>
    )
}
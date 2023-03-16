import CreateAccount from "../components/CreateAccount";
import Welcome from "../components/Welcome";


export default function Greeting(props) {
    if(props.logged === true){
        return <Welcome/>
    }else{
        return <CreateAccount/>
    }
}
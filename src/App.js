import './App.css';
import BudgetSetings from './components/BudgetSetting';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import UserProfile from './components/UserProfile';
import Greeting from './layouts/Greeting';
import LogIn from "/Users/amirhali/repos/react-expenses/src/components/LogIn.jsx"
import { useSelector } from 'react-redux';
import { setModal } from './features/signInSlice';
import CardBox from './components/Card';


function App() {

  const sideOpen = useSelector(setModal);

  return (
    <div className='main'>
      <Sidebar isActive={true}/>
      <div className="content" style={{marginLeft: sideOpen.sideBarOpen ? "300px" : "0px"}}>
        <Greeting logged={true}/>
      </div>
      <SignIn/>
      <LogIn/>
      <BudgetSetings/>
      <SignOut/>
      <UserProfile/>
    </div>
  );
}

export default App;

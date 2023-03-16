import './App.css';
import BudgetSetings from './components/BudgetSetting';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import Greeting from './layouts/Greeting';


function App() {
  return (
    <div className='main'>
      <Sidebar isActive={true}/>
      <div className="content">
        <Greeting logged={true}/>
      </div>
      <SignIn/>
      <BudgetSetings/>
    </div>
  );
}

export default App;

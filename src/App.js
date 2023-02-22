import './App.css';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import {useSelector} from 'react-redux'
const App = () => {
  const user = useSelector((state) => state.user.user);
  console.log(useSelector((state) => state.user.user));
  return(
    <div>
      {user ? <LogoutComponent /> : <LoginComponent />}
    </div>
  )
};

export default App;

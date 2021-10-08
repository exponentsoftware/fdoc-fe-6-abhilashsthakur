import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router} from 'react-router-dom';

import NavigationTabs from './component/navigation/NavigationTabs';
import MyRoute from './component/route/Route';

import { Container } from 'react-bootstrap';
import { LoginContext } from './component/loginContext';


function App() {

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    cPassword: ''
  });

  const [status,setStatus]=useState(null);

  return (
    // eslint-disable-next-line
    <LoginContext.Provider value={[newUser, setNewUser] , [status,setStatus]}>

      <Router>
        <NavigationTabs />
        <Container>
          <MyRoute/>
        </Container>
      </Router>
    </LoginContext.Provider>
    
  );
}

export default App;

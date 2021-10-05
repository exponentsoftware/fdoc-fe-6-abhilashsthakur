import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router} from 'react-router-dom';

import NavigationTabs from './component/navigation/NavigationTabs';
import MyRoute from './component/route/Route';

import { Container } from 'react-bootstrap';


function App() {



  return (
    
      <Router>
        <NavigationTabs />

        <Container>
          <MyRoute/>
        </Container>
      </Router>
    
  );
}

export default App;

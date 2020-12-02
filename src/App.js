import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import FilmRequest from './Axios/FilmRequest';


function App() {
  return (
      <>
      <Router>
        <div>
          <h1>Welcome to Film Search</h1>
          <ul>
              <Link to="/filmrequest">Search Film</Link>
          </ul>
       
             <Switch>
                <Route path="/filmrequest" component={FilmRequest} exact />
             </Switch>
        </div>
         </Router>
      </>
     );
}

export default App;

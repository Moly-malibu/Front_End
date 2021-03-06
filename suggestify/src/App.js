import React  from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Register from './components/Register';

const LogContainer = styled.div`
    h2, h3{
        margin: 3% 1% 2% 1%;;
        font-size: calc(10px + 2vmin);
        color: white;
        text-shadow: 0 0 10px #81b71a;
    }
    p{
        margin: 3% 1% 2% 1%;;
        font-size: calc(8px + 2vmin);
        color: white;
        text-shadow: 0 0 10px #81b71a;
    }

    a{
        text-decoration: none;
        color: white;
        text-shadow: 0 0 10px #81b71a;
        font-size: calc(4px + 2vmin)
    }
    .back-link{
        margin: 2%;
    }

`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Suggestify</h1>
      </header>
      {/* We can decide where to put the login/register page. for now i'll render it here so it's easier to see/work with */}
        <LogContainer>
        <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path='/register' render={(props) =>(<Register {...props}/>)} />
            <Route exact path='/' render={(props) =>(<Login {...props}/>)} />
        </Switch>
        </LogContainer>
        </div>
    );
}


export default App;

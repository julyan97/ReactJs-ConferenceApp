import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ConferencesHookWithAxios } from './Components/Conferences/Conferences';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CreateConference } from './Components/CreateConference/CreateConference';
import { Navigation } from './Components/Navigation/Naviation';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { AuthContext } from './Contexts';


const App = () => {
  const [email, setEmail] = useState("")

  return (

    <Fragment>
      <AuthContext.Provider value={{ email }}>
        <Router>
          <Navigation name={email} setName={setEmail} />
          <Route path="/" exact component={() => <ConferencesHookWithAxios />} />
          <Route path="/createConference" exact component={() => <CreateConference />} />
          {
            !email?
            <Fragment>
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/register" exact component={() => <Register />} />
            </Fragment>
            :null
          }
        </Router>
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;

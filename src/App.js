import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./components/Login"
import Blog from './components/Blog';
import { Route, Switch } from "react-router-dom";
import AuthService from "./services/auth.service"

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    return user
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/"]} component={Login} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

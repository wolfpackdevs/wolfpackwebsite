import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';

import Contact from './pages/contact/contact.page';

import Header from './components/Header/Header.component';
import Foot from './components/foot/Foot.component';

// import firebase stuff
import {auth} from './firebase/firebase.utils';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    console.log(user);
    return () => {
      unsubscribe();
      console.log(user);
    };
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Foot />
    </div>
  );
}

export default App;

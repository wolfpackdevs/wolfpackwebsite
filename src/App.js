import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';

import Contact from './pages/contact/contact.page';

import BlogPage from './pages/blog/blog-page.component';

// import Hamburger from './components/hamburger/Hamburger.component';
import Header from './components/Header/Header.component';
import Foot from './components/foot/Foot.component';

// import firebase stuff
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => {
      unsubscribe();
    };
  }, []);


  createUserProfileDocument(user);
  
  return (
    <div className="App">
      <Header user={user} />
      {/* <Hamburger user={user} /> */}
        <div className="main">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
            <Route path="/Blog" component={BlogPage} />
          </Switch>
        </div>
      <Foot />
    </div>
  );
}

export default App;

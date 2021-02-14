import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';
import Contact from './pages/contact/contact.page';


import Hamburger from './components/hamburger/Hamburger.component';
// import Nav from './components/nav/Nav.component'; // Delete either this or the line above. Also below in the JSX
import Foot from './components/foot/Foot.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hamburger />
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Foot />
    </div>
  );
}

export default App;

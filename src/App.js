import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';

import Contact from './pages/contact/contact.page';

import BlogPage from './pages/blog/blog-page.component';

import Header from './components/Header/Header.component';
import Foot from './components/foot/Foot.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component={Contact}/>
        <Route path="/Blog" component={BlogPage}/>
      </Switch>
      <Foot />
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';

import Contact from './pages/contact/contact.page';

import BlogPage from './pages/blog/blog-page.component';

import Header from './components/Header/Header.component';
import Foot from './components/foot/Foot.component';

// import firebase stuff
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor (){
    super ();

    this.state = {
      currentUser: null 
    };
  }

  unsubscribeFromAuth = null;

  componentDidMout(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header user={this.state.currentuUser} />
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
}
export default App;

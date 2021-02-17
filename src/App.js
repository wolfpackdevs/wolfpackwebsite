import React from 'react';
import { Switch, Route } from 'react-router-dom';

//redux imports
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Homepage from './pages/homepage/homepage.page';

import Contact from './pages/contact/contact.page';

import BlogPage from './pages/blog/blog-page.component';

import BlogEditor from './pages/blog/blog-editor.component';

import AdminPage from './pages/admin/admin-page.component';

import Header from './components/Header/Header.component';
import Foot from './components/foot/Foot.component';

// import firebase stuff
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
          <div className="main">
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
            <Route path="/Blog" component={BlogPage} />
            <Route exact path="/edit_Blog" component={BlogEditor} />
            <Route exact path="/_admin" component={AdminPage} />
            </Switch>
          </div>
        <Foot />
      </div>
    );
  }
}
//sends modified state to the redux store using a redux action
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);

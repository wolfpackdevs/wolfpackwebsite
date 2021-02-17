import React from 'react';
import { Link } from 'react-router-dom';

//this is essential for redux
import { connect } from 'react-redux';

import './Header.style.scss';

import { SignInWithGoogle, auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/wolf_logo.svg';

const Header =({currentUser}) => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to="/" >
                home
            </Link>
            <Link className='option' to='/blog'>
                blog
            </Link>
            <Link className='option' to='/about'>
                about
            </Link>
            <Link className='option' to='/contact'>
                contact
            </Link>
        </div>
        {/* horizontal gap in the nav here */}
        <div className="options">
            { currentUser ? 
                <div className='option' onClick={ ()=> auth.signOut()}>sign out</div> 
                : 
                <div className='option' onClick = {SignInWithGoogle}>sign in</div> 
            }
        </div>
    </div>
)

//this calls the state from the the root reducer in the redux store
const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
});
//connect is a higher order componet to make this component able to access the redux store
export default connect(mapStateToProps)(Header);

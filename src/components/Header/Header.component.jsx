import React from 'react';
import { Link } from 'react-router-dom';
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

export default Header;

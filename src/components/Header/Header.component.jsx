import React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';

import { SignInWithGoogle, auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/wolf_logo.svg';
const Header =({ user }) => (
    <div className='header'>
         <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/blog'>
                BLOG
            </Link>
            <Link className='option' to='/about'>
                ABOUT US
            </Link>
            <Link className='option' to='/contact'>
                CONTACT US
            </Link>
           {
               user ? 
               <div className='option' onClick={ ()=> auth.signOut()}>sign out</div>
               :
               <div className='option' onClick = {SignInWithGoogle}>
               SIGN IN
               </div>
           }

        </div>

    </div>

)

export default Header;
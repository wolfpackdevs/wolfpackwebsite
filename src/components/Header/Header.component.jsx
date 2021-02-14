import React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';
import {ReactComponent as Logo} from '../../assets/wolf_logo.svg';
const Header =() => (
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
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>

        </div>

    </div>

)

export default Header;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SignInWithGoogle, auth } from '../../firebase/firebase.utils';

import './Hamburger.style.scss';

const Hamburger = ({user}) => {

    const hamburgerIcon = <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
    </svg>;

    const [visible, setVisible] = useState(false);
    const [navStyle, setNavStyle] = useState('nav')

    const toggle = () => {
        setVisible(!visible)
        setNavStyle(visible ? 'nav' : 'nav-click')
    }

    const menu = (
        <div onClick={toggle}>
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
                { user ? <div className='option' onClick={ ()=> auth.signOut()}>sign out</div> : <div className='option' onClick = {SignInWithGoogle}>sign in </div> }
        </div>
        </div>); 

    return(
        <div className={navStyle}>
            <div onClick={toggle} className="hamburger-icon">{hamburgerIcon}</div>
            {!visible ? null : menu}
        </div>
    )
}

export default Hamburger;

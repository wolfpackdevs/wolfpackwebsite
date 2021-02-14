import React, {useState} from 'react';

import './Hamburger.style.scss';

const Hamburger = () => {

    const [visible, setVisible] = useState(false);
    const [navStyle, setNavStyle] = useState('nav')

    const toggle = () => {
        setVisible(!visible)
        setNavStyle(visible ? 'nav' : 'nav-click')
    }

    const menu = (
        <div onClick={toggle}>
            <a className='option' href='/'>home</a>
            <a className='option' href='about'>another page!</a>
        </div>); 

    return(
        <div className={navStyle}>
            <h1 onClick={toggle}>TOGGLE MENU</h1>
            {!visible ? null : menu}
        </div>
    )
}

export default Hamburger;

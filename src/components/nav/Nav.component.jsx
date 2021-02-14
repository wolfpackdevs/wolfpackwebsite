import { Link } from 'react-router-dom';

import './Nav.style.scss'

const Nav = () => {
    return (
        <div className="nav">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/another'>Another Page</Link>
        </div>
    )
}

export default Nav;

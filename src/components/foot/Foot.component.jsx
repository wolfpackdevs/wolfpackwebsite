import './Foot.style.scss';
import { Link } from 'react-router-dom';

const Foot = () => {
    return (
        <div className="foot">
            <div className="contact column">
                <div className="address">
                    <p>Somestreet 5</p>
                    <p>Tel Aviv, Israel</p>
                </div>
                <p>Phone: 058-4077538</p>
            </div>
            <div className="menu column">
                <Link className='option' to='/'>
                    home
                </Link>
                <Link className='option' to='/about'>
                    about
                </Link>
                <Link className='option' to='/blog'>
                    blog
                </Link>
                <Link className='option' to='/contact'>
                    contact
                </Link>
            </div>
            <div className="copyright column">
                <p>© 2021 WolfPackDevs</p>
            </div>
        </div>
    )
}

export default Foot;

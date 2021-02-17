import './homepage.style.scss';
import Fade from 'react-reveal/Fade';

const Homepage = () => {
    return(
        <div className="home">
            <div className="hero">
            </div>
            <div className="hero-content">
                <h1>Wolf Pack Developers</h1>
                <h3>Creators of Beer Spot</h3>
            </div>
            <Fade>
            <div className="team left">

                <h1 className="title">Our Team</h1>
            </div>
            <div className="blog right">
                <h1 className="title">Blog</h1>
            </div>
            <div className="contact left">
                <h1 className="title">Contact us</h1>
            </div>
            </Fade>
        </div>
    )
}

export default Homepage;

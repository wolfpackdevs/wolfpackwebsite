import React from 'react';
import { Link } from 'react-router-dom';
import './admin-page.styles.scss';
import { connect } from 'react-redux';




const adminPage =(props)=>{

        return(
            <div>
                <h1>ADMIN ONLY</h1>
                {
                    (!props.currentUser) ?
                        <div className='message'>You Need to log in before accessing this Page</div>
                    :(!props.currentUser.currentUser.admin) ?
                        
                        <div className='message'>You Do not have Admin Privleges</div>
                    :<div className='options'>
                        <Link className='option' to="/" >
                            home
                        </Link><br/>
                        <Link className='option' to='/blog'>
                            blog
                        </Link><br/>
                        <Link className='option' to='/edit_blog'>
                            edit blog
                        </Link><br/>
                        <Link className='option' to='/about'>
                            about
                        </Link><br/>
                        <Link className='option' to='/contact'>
                            contact
                        </Link>
                    </div>
                
                }
            </div>
        )
            
    



}
//this calls the state from the the root reducer in the redux store
const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(adminPage);
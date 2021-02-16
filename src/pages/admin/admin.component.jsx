import React from 'react';
import { Link } from 'react-router-dom';
import './admin.styles.scss';

const LogIn=()=>{
    return(<div className='message'>You Need to log in before accessing this Page</div>);
}
const AdminReject=()=>{
    return(<div className='message'>You Do not have Admin Privleges</div>);
}
const Admin=()=>{
    console.log('got to admin page')
    return(
    <div>
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
    );
}

const DecidePage=(props)=>{
    console.log('got to decisions');
    if (!props.isLoggedIn){
        return <LogIn/>;
    }
    else if(!props.isAdmin){
        return <AdminReject/>
    }
    else{
        return <Admin/>;
    }
}
class Admin_Page extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isLoggedIn: true,
            isAdmin:true
        }
    }
    
    render(){
        const {isLoggedIn, isAdmin}=this.state;
        return(
            <div>
                <h1>ADMIN ONLY</h1>
                <DecidePage isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            </div>
        )
            
    }



}
export default Admin_Page;
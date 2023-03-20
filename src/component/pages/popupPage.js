import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Authenticate/Login';
import './popupPage.css'

function PopupPage(props) {
    return (
        <div className='container'>
            <div  className='py-4'>

           
            <div className='tag text-center'>
             <p><b>You must be logged first to view this page on Student-Admin-Management</b><br/>
                 <a style={{textDecoration:"none"}} href="#">Log in</a> below or <br/> <Link style={{textDecoration:"none"}} to='/contact' >Drop a mail</Link> to create login Credentials</p>
            </div>
            <div className='body mt-3'>
                <Login/>
            </div>
            </div>
        </div>
    );
}

export default PopupPage;
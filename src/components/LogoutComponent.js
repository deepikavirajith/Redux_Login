import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { userlogout } from '../actions/userAction';
const LogoutComponent = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout =(e) => {
        e.preventDefault();
        dispatch(userlogout(user));
        console.log(dispatch(userlogout()));
    }

    console.log(useSelector((state) => state.user.user));

  return (
    <div className='container'>
        <div className='row m-2'>
            <h1>Welcome  <span>{user.userName}</span></h1>
        </div>
        <div className='row m-2'>
            <h1>Email:  <span>{user.userEmail}</span></h1>
        </div>
        <div className='row col-sm-3 m-3'>
            <button className='btn btn-primary' onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
};

export default LogoutComponent;
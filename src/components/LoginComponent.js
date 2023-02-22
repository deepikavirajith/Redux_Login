import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'reactstrap';
import { userlogin } from '../actions/userAction';

const LoginComponent = () => {
   
    const [state, setState] = useState({

        user: {
            userName: '',
            userEmail: '',
            userPassword: ''
        }

    })

    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        e.preventDefault();
        setState({
            user: {
                ...state.user,
                [e.target.name]: e.target.value,
            }
        })

    }

    const{user} = state;

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(userlogin(state.user))
        console.log(dispatch(userlogin(state.user)));
        setState({
            user: {
                userName: '',
                userEmail: '',
                userPassword: ''
            }
        })

    }

        return(
            <div className='container'>
                <div className='row'>
                    <Form onSubmit={onFormSubmit}>
                        <div className='row m-3 col-sm-6'>
                            <input type="text" placeholder='Enter Name' 
                            required={true} name='userName' value={user.userName} 
                            onChange={onChangeInput}></input>
                        </div>
                        <div className='row m-3 col-sm-6'>
                            <input type="email" placeholder='Enter Name'
                             required={true} name='userEmail' value={user.userEmail} 
                             onChange={onChangeInput}></input>
                        </div>
                        <div className='row m-3 col-sm-6'>
                            <input type="password" placeholder='Enter Name'
                             required={true} name='userPassword' value={user.userPassword} 
                             onChange={onChangeInput}></input>
                        </div>
                        <div className='row m-3 col-sm-3'>
                           <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>

                    </Form>

                </div>
            </div>
        )
    
}
export default LoginComponent;
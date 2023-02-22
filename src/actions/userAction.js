import { ActionTypes } from "../constants/actionTypes";

export const userlogin = (user) => {
    return {
        type: ActionTypes.USER_LOGIN,
        payload: user
    }

}

export const userlogout = () => {
    return{
        type: ActionTypes.USER_LOGOUT,
        payload:''
    }
}
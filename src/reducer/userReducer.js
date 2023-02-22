import { ActionTypes } from "../constants/actionTypes";

const initialstate = {
    user: {},
}

export const userdata = (state = initialstate, action) => {
    console.log(action);
    switch (action && action.type) {
        case ActionTypes.USER_LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case ActionTypes.USER_LOGOUT:
            return {
                state: ''
            };
        default:
            return state;
            }
    }

    
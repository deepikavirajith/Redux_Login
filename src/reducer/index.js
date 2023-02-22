import { userdata } from "../reducer/userReducer";
import { combineReducers } from "redux";


const reducer = combineReducers({
    user: userdata
});
export default reducer;
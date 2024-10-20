import handleCart from './handleCart'
import { combineReducers } from "redux";
import authReducer from '../../pages/authReducer';

const rootReducers = combineReducers({
    handleCart,
    auth: authReducer,
})
export default rootReducers
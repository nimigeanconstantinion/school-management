import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from "../constants/userConstants";


export const loginReducer=(state={retToken:""},action)=>{
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true,retToken: ""}
        case USER_LOGIN_SUCCESS:
            return{
                loading: false,
                retToken: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }

}


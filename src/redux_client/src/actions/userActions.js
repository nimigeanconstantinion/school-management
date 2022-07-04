import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from "../constants/userConstants";
import Api from "../Api";

export const loginUser=(user)=>async(dispatch)=>{
    let api=new Api();
    try{
        dispatch({type:USER_LOGIN_REQUEST});
        const response=await api.login(user);
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:response
        });

    }catch (e) {
        dispatch({
                type:USER_LOGIN_FAIL,
                payload:e.response&&e.response.data.message
                    ?e.response.data.message
                    :e.message
            });
    }

}
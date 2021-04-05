import {  Login_Success,Logout_success} from '../types';
import * as Storage from '../../service/AsyncStoreConfig'
import  AsyncStorage  from "@react-native-community/async-storage";


export function Login(Data) {
    return async (dispatch) => {
                dispatch(loginSuccess(Data));
    }
}

export function Logout() {
    return async (dispatch) => {
             AsyncStorage.clear();
            dispatch(setLogoutSuccess());
    }
}




function loginSuccess(data) {
    Storage.saveData('UserId',data)

    return {
        type: Login_Success,
        data:data
    }
}
function setLogoutSuccess() {
    return {
        type: Logout_success
    }
}
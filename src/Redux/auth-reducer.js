import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default: return state;
    }
};
export const setAuthUserData = (userID, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userID, email, login, isAuth }
});


export const Auth = () => async (dispatch) => {
       let response = await AuthAPI.Auth();
            if (response.resultCode === 0) {
                let { id, email, login } = response.data
                dispatch(setAuthUserData(id, email, login, true));
            }
    }
export const LoginTh = (email, password, rememberMe) => async (dispatch) => {
        let response = await AuthAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(Auth())
            } else {
                let message = response.data.messages.length > 0 
                ? response.data.messages[0] 
                : "Some error"
                dispatch(stopSubmit('login', { _error: message }))
            }
}

export const LogoutTh = () => async (dispatch) => {
       let response = await AuthAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer;
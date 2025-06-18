import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthAction } from "../_types/authAction";
import { AuthState } from "../_types/authState";
import { AuthPayload } from "../_types/payload/authPayload";
/**
 * AuthReducer function is a reducer for managing authentication state in the application.
 * It takes the current state and an action as parameters and return a new state based on the
 * @param state 
 * @param action 
 * @returns 
 */
export const authReducer = (
    state: AuthState,
    action: AuthAction,
): AuthState => {
    switch(action.type) {
        case AuthActionTypeEnum.AUTH:
            return {
                ...state,
                token: (action.payload as AuthPayload).token,
            } as AuthState;
        case AuthActionTypeEnum.LOGOUT:
            return {
                ...state,
                token: undefined,
                userInfo: undefined,
            } as AuthState;
        case AuthActionTypeEnum.LOAD:
            return {
                ...state,
                loaded: true,
                token: (action.payload as AuthPayload).token,
            } as AuthState;
        default:
            return state;
    }
}
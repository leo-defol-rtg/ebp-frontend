import { AuthState } from "../_types/authState";

/**
 * Initial state for the authentication context.
 * This state includes the authentication token, user information,
 * a flag indicating whether the state has been loaded, and any error that may have occurred.
 */
export const initialState = {
    token: undefined, 
    loaded: false,
    error: undefined,
} as AuthState;
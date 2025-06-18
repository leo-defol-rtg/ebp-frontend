/**
 * AuthState interface represents the state of authentication in the application
 * it includes properties for the authentication, token, whether the state is loaded,
 * and any error messages related to authentication.
 */
export interface AuthState {
    token: string | undefined;
    loaded: boolean;
    error: string | undefined;
}
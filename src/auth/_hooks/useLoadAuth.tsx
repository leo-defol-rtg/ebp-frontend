import { useRouter } from "next/navigation";
import { useContext, useCallback } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";

/**
 * useLoadAuth is a custom hook that provides a function to load the authentication state
 * It retrieves the authentication token from local storage and updates the authentication state in the AuthContext.
 * If no token is provided, it removes the authentication token from local storage and redirects the user to the home page.
 */
export function useLoadAuth(): (token?: string) => void {
    const router = useRouter();
    const  { dispatch } = useContext(AuthContext);
    const func = useCallback((token?: string)=> {
        if (dispatch) {
            dispatch({
                type: AuthActionTypeEnum.LOAD,
                payload: { token },
            });
            if(!token) {
                localStorage.removeItem(AuthStorageKeyEnum.AUTH_TOKEN);
                router.push('/');
            }
        }
    }, [dispatch, router]);
    return func;
}
import { useContext, useMemo } from "react";
import { AuthContext } from "../_contexts/authContext";

/**
 * useIsAuthenticated is a custom hook taht checks if the user is authenticated.
 * It accesses the AuthContext to retrieve the current authentication state
 * and returns a boolean indicating whether the user has a valid authentication token.
 */
export function useIsAuthenticated(): boolean {
    const { state } = useContext(AuthContext);
    const hasToken = useMemo(() => !!state?.token, [state]);
    return hasToken;
}
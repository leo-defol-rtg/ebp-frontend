"use client"

import { PropsWithChildren, useContext, useEffect } from "react";
import { AuthContext } from "../_contexts/authContext";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { useLoadAuth } from "../_hooks/useLoadAuth";
/**
 * AuthLoader is a React component that loads the authentication state
 * when the application starts. It checks for a saved authentication token
 * in local storage and validates it with the server. If the token is valid,
 * it updatesthe authentication state; otherwise, it clears the authentication state.
 */
export const AuthLoader = ({ children }: PropsWithChildren) => {
    const loadAuth = useLoadAuth();
    const {
        state: { token, loaded },
        dispatch,
    } = useContext(AuthContext);
    useEffect(() => {
        if(loaded || !dispatch) {
            return;
        }
        // test token
        const savedToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
        loadAuth(savedToken ?? 'todo: REMOVE');
    }, []);
    return <>{children}</>
}
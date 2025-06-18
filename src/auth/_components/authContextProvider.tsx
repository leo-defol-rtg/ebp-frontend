"use client"

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState } from "../_constants/initialState";
import { AuthContext } from "../_contexts/authContext";
import { authReducer } from "../_reducers/authReducer";

/**
 * AuthContextProvider is a React component that provides the authentication context
 * to its children. It uses the useReducer hook to manage the authentication state
 * and dispatch actionsto update the state. The context includes the current state
 * and a dispatch function that can be used to trigger state changes.
 */
export const AuthContextProvider = ({children}: PropsWithChildren) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const value  = useMemo(() => ({state, dispatch}), [state, dispatch]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
"use client"

import { AppReducerContext } from "ebp/commons/app/_types/appReducerContext";
import { initialState } from "../_constants/initialState";
import { AuthAction } from "../_types/authAction";
import { AuthState } from "../_types/authState";
import { createContext } from "react";

/**
 * AuthContext is a React context that provides the authentication state
 * and actions to the components in the application. It is used do manage
 * user authentication, including login, logout, and loading the authentication state.
 * The context is initialized with the initial state and a empy action type.
 */
export const AuthContext = createContext({
    state: initialState,
} as AppReducerContext<AuthState, AuthAction>)
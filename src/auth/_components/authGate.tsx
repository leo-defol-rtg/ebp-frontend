"use client"

import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "../_contexts/authContext";

/**
 * AuthGate is a React component that acts as a gatekeeper for the authentication state.
 * It checks if the authentication state is loaded and renders its children if it is.
 * If the authentication state is not loaded, it displays a loading message.
 */
export function AuthGate({ children}: PropsWithChildren) {
    const { state: { loaded}} = useContext(AuthContext);
    if(!loaded) {
        return (<div className="flex justify-center h-screen">Loading...</div>)
    }
    return <>{children}</>;
}
"use client"

import { PropsWithChildren, ReactNode } from "react";
import { useIsAuthenticated } from "../_hooks/useIsAuthenticated";

export interface ProtectedComponentProps extends PropsWithChildren {
    fallback?: ReactNode;
}
/**
 * ProtectedComponent is a React component that renders different content based on the authentication state.
 * It uses the 'useIsAuthenticated' hook
 * to determine which content to display based on the provided 'renders' prop.
 */
export function ProtectedComponent({ children, fallback }: ProtectedComponentProps) {
    const isAuthenticated = useIsAuthenticated();
    if(!isAuthenticated) {
        return fallback;
    }
    return <>{children}</>
}
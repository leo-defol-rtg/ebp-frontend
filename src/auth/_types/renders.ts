import { ReactNode } from "react";
/**
 * Renders interface defines the structure for redering components
 * based on authentication status.
 * It includes optional properties for protected and public components,
 * allowing for flexible redering based on user authentication.
 * The keys are strings, and the values can be ReactNode or undefined.
 * This interface can be used to manage different redering scenarios
 * in a application, such as displaying different components
 * for authenticated and unauthenticated users.
 */
export interface Renders {
    [role: string]: ReactNode | undefined;
    protected?: ReactNode;
    public?: ReactNode;
}
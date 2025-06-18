"use client"

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthContextProvider } from "ebp/auth/_components/authContextProvider";
import { SidebarContextProvider } from "ebp/commons/sidebar/_components/sidebarContextProvider";
import { PropsWithChildren } from "react";
/**
 * AppProvider is a React component that wraps the application
 * with various context providers to manage
 * authentication, localization, messages and sidebar state.
 */
export const AppProvider = ({ children }: PropsWithChildren) => <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AuthContextProvider>
        <SidebarContextProvider>
            {children}
        </SidebarContextProvider>
    </AuthContextProvider>
</LocalizationProvider>    
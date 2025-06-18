"use client"

import { PropsWithChildren, useReducer, useMemo } from "react";
import { initialState } from "../_constants/initialState";
import { SidebarContext } from "../_contexts/sidebarContexts";
import { sidebarReducer } from "../_reducers/sidebarReducer";

export function SidebarContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);
    const value = useMemo(() => ({state, dispatch}), [state, dispatch]);
    return (<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>)
}
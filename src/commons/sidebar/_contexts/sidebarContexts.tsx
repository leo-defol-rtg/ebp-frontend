"use client"

import { AppReducerContext } from "ebp/commons/app/_types/appReducerContext";

import { initialState } from "../_constants/initialState";
import { SidebarAction } from "../_types/sidebarAction";
import { SidebarState } from "../_types/sidebarState";
import { createContext } from "react";

export const SidebarContext = createContext({
    state: initialState
} as AppReducerContext<SidebarState, SidebarAction>);

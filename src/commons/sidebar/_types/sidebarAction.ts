import { AppAction } from "ebp/commons/app/_types/appAction";
import { SidebarActionTypeEnum } from "../_enums/sidebarActionType.enum";
import { SidebarActionPayload } from "./sidebarActionPayload";

export type SidebarAction = AppAction<SidebarActionTypeEnum, SidebarActionPayload>;

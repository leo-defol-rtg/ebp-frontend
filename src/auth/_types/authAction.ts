import { AppAction } from "ebp/commons/app/_types/appAction";
import { AuthActionTypeEnum } from "../_enums/authActionType.enum";
import { AuthActionPayload } from "./authActionPayload";

/**
 * This type defines the structure of an authentication action.
 * It extends the AppAction tpye with a specific action type and payload.
 * The AuthActionPayload contains the data 
 */
export type AuthAction = AppAction<AuthActionTypeEnum, AuthActionPayload>;
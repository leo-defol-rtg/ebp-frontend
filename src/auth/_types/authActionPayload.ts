import { AuthPayload } from "./payload/authPayload";
import { LogoutPayload } from "./payload/logoutPayload";

/**
 * AuthActionPayload type is a union type that combines the AuthPayload and
 * LogoutPayload types.
 * This type is used to represent the payload of authentication
 * actions in the application
 */
export type AuthActionPayload = AuthPayload | LogoutPayload;
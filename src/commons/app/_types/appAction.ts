import { AppActionPayload } from "./appActionPayload";

/**
 * This interface defines the streucture of an application action.
 * It includes a type property that represents the action type,
 * and a payload property that contains the data associated with the action.
 * The type parameter T represents the action type, while F extends AppActionPayload
 * allows for flexibility in the structure of the payload.
 * This interface can be used to create actions that are dispatched in the application,
 * enabling state management and interaction with the application.
 */
export interface AppAction<T, F extends AppActionPayload> {
    type: T;
    payload: F;
}
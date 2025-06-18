import { Dispatch } from 'react';

import { AppState } from './appState';
/**
 * This file defines the type for application reducer context.
 * It includes the current state of the application and an optional dispatch function
 * for updating the state.
 * The generic type T extends AppState allows for flexibility in the state structure,
 * while F represents the action type that can be dispatched.
 */
export interface AppReducerContext<T extends AppState, F> {
    state: T;
    dispatch?: Dispatch<F>;
}

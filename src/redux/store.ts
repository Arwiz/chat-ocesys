import profileReducer from '../app/dashboard/profile/profileSlice';
import auditReducer from './slices/auditSlice';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
    return configureStore({
        reducer: {
            profile: profileReducer,
            audit: auditReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

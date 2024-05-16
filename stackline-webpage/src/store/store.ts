import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Configure the store
export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks that can be used throughout the application
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

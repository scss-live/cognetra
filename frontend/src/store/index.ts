import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import serviceReducer from './slices/serviceSlice';
import blogReducer from './slices/blogSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        services: serviceReducer,
        blog: blogReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

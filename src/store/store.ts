import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './slices/postsSlice';
import { postsApi } from './api/postsApi';

export const store = configureStore({
    reducer: {
        [postsSlice.reducerPath]: postsSlice.reducer
        ,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

// Типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './slices/posts/posts.slice';
import { postsApi } from './api/posts.api';

export const store = configureStore({
    reducer: {
        [postsSlice.reducerPath]: postsSlice.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

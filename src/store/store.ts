// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';

export const store = configureStore({
    reducer: {
        news: newsReducer,
    },
});

// Типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

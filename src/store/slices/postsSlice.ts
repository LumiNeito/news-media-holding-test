import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    title: ''
};

export const postsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        }
    },
});

export const { setTitle } = postsSlice.actions;

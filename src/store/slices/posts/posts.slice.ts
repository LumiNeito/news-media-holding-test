import { PostResponse } from '@/store/api/posts.api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
    all: PostResponse[];
}

const initialState: PostsState = {
    all: [],
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, action: PayloadAction<PostResponse[]>) => {
            state.all = [...state.all, ...action.payload];
        }
    },
});

export const { addPosts } = postsSlice.actions;

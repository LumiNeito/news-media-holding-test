import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostResponse } from '../../types/types';

interface PostsState {
    posts: PostResponse[];
}

const initialState: PostsState = {
    posts: [],
};

export const postsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostResponse[]>) => {
            state.posts = action.payload;
        }
    },
});

export const { setPosts } = postsSlice.actions;

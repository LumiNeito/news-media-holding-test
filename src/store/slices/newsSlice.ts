import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    title: ''
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        }
    },
});

export const { increment, decrement, setTitle } = newsSlice.actions;
export default newsSlice.reducer;

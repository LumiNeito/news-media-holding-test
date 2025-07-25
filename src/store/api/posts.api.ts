import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostResponse {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

export interface PostsResponse {
    posts: PostResponse[];
    limit: number;
    skip: number;
    total: number;
}

interface PostsArgs {
    limit?: number
    skip?: number
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<PostsResponse, PostsArgs>({
            query: ({ limit = 10, skip = 0 }) => `posts?limit=${limit}&skip=${skip}`,
        }),
    }),
});

export const { useGetPostsQuery } = postsApi
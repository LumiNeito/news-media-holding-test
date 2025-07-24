
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

export type PostsArray = PostResponse[];
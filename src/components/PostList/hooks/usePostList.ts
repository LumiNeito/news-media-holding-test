import { useGetPostsQuery } from "@/store/api/posts.api";
import { useAppSelector } from "@/store/hooks";
import { addPosts } from "@/store/slices/posts/posts.slice";
import { allPostsSelector } from "@/store/slices/posts/selectors";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

const POSTS_PER_PAGE = 10

export const usePostList = () => {
    const [skip, setSkip] = useState(0);
    const dispatch = useDispatch()
    const posts = useAppSelector(allPostsSelector)
    const { ref, inView } = useInView({ threshold: 0, });

    const { data, isFetching, isSuccess, isError, refetch } = useGetPostsQuery({ skip, limit: POSTS_PER_PAGE });

    useEffect(() => {
        if (isSuccess && data?.posts) {
            dispatch(addPosts(data.posts));
        }
    }, [data, isSuccess]);

    useEffect(() => {
        if (inView && data && (skip + POSTS_PER_PAGE) < data?.total && !isFetching) {
            setSkip(prev => prev + POSTS_PER_PAGE);
        }
    }, [inView]);

    return { data: posts, isFetching, loadMoreRef: ref, isError, refetch }
}
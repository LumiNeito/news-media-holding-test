import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useGetPostsQuery } from '@/store/api/postsApi';
import { PostItem } from './PostItem/PostItem';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { setPosts } from '@/store/slices/postsSlice';

export const NewsList = () => {

    const [skip, setSkip] = useState(0);
    const dispatch = useDispatch()
    const allPosts = useAppSelector((state) => state.news.posts)
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const queryParams = { skip };

    const { data, isFetching, isSuccess } = useGetPostsQuery(queryParams);
    const limit = 10

    useEffect(() => {
        if (isSuccess && data?.posts) {
            if (skip === 0) {
                dispatch(setPosts(data.posts));
            } else {
                const updatedPosts = [...allPosts, ...data.posts];
                dispatch(setPosts(updatedPosts));
            }
        }
    }, [data, isSuccess]);

    useEffect(() => {
        if (inView && data && (skip + limit) < data.total && !isFetching) {
            setSkip(prev => prev + limit);
        }
    }, [inView]);


    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={allPosts}
                renderItem={(item) => (
                    <PostItem
                        title={item.title}
                        body={item.body}
                        views={item.views}
                        reactions={item.reactions}
                        tags={item.tags}
                        id={item.id}
                        userId={item.userId}
                    />
                )}
            />
            <div ref={ref} style={{ width: '20px' }}></div>
        </>
    )

}
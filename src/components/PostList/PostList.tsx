import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useGetPostsQuery } from '@/store/api/postsApi';
import { PostResponse } from '@/types/types';
import { PostItem } from './PostItem';

export const NewsList = () => {

    const [skip, setSkip] = useState(0);
    const [allPosts, setAllPosts] = useState<PostResponse[]>([]);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const queryParams = { skip };

    const { data, isFetching, isSuccess } = useGetPostsQuery(queryParams);
    const limit = 10

    useEffect(() => {
        if (isSuccess && data?.posts) {
            if (skip === 0) {
                setAllPosts(data.posts);
            } else {
                setAllPosts(prevPosts => [...prevPosts, ...data.posts]);
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
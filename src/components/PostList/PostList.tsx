import React from 'react';
import { List } from 'antd';
import { PostItem } from './PostItem/PostItem';
import { usePostList } from './hooks/usePostList';

export const NewsList = () => {
    const { loadMoreRef, isFetching, data } = usePostList()

    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
            loading={isFetching}
            loadMore={<div style={{ height: 20 }} ref={loadMoreRef}></div>}
            renderItem={(item) => (
                <PostItem
                    title={item.title}
                    body={item.body}
                    views={item.views}
                    reactions={item.reactions}
                    tags={item.tags}
                    id={item.id}
                />
            )}
        />
    )

}
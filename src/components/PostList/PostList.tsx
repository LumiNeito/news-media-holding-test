import React from 'react';
import { Button, List, Result } from 'antd';
import { PostItem } from './PostItem/PostItem';
import { usePostList } from './hooks/usePostList';

export const NewsList = () => {
    const { loadMoreRef, isFetching, data, isError, refetch } = usePostList()

    if (isError) return (
        <Result
            status="error"
            title="Ошибка при загрузке новостей"
            subTitle="Попробуйте перезагрузить или зайти позже"
            extra={[
                <Button type="primary" key="console" onClick={() => refetch()}>
                    Попробовать снова
                </Button>,
            ]}
        >
        </Result>
    )

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
import { Flex, List, Space } from "antd"
import React from "react";
import { LikeOutlined, EyeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Tags } from "@/components/PostList/Tags";
import styles from './PostItem.module.css'
import { PostResponse } from "@/store/api/posts.api";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

type PostItemProps = Omit<PostResponse, "userId">

export const PostItem = (
    {
        title,
        body,
        tags,
        reactions,
        views,
        id
    }: PostItemProps
) => {
    return (
        <List.Item
            key={id}
            actions={[
                <IconText icon={EyeOutlined} text={views.toString()} key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text={reactions.likes.toString()} key="list-vertical-like-o" />,
                <IconText icon={DislikeOutlined} text={reactions.dislikes.toString()} key="list-vertical-message" />,
            ]}
        >
            <List.Item.Meta title={title} />
            <Flex gap={8} vertical>
                <div className={styles.body}>{body}</div>
                <Tags tags={tags} />
            </Flex>
        </List.Item>
    )
}
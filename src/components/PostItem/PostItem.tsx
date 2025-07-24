import { PostResponse } from "@/types/types"
import { Flex, List, Space } from "antd"
import React from "react";
import { LikeOutlined, EyeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Tags } from "@/components/Tags";
import styles from './PostItem.module.css'


const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


export const PostItem = (
    {
        title,
        body,
        tags,
        reactions,
        views,
    }: PostResponse
) => {


    return (
        <List.Item
            key={title}
            actions={[
                <IconText icon={EyeOutlined} text={views.toString()} key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text={reactions.likes.toString()} key="list-vertical-like-o" />,
                <IconText icon={DislikeOutlined} text={reactions.dislikes.toString()} key="list-vertical-message" />,
            ]}
        >
            <List.Item.Meta
                title={title}
            />
            <Flex gap={8} vertical>
                <div className={styles.slicedBody}>{body}</div>
                <Tags tags={tags} />
            </Flex>
        </List.Item>
    )
}
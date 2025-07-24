import { PostResponse } from "@/types/types"
import { List, Space } from "antd"
import React from "react";
import { LikeOutlined, EyeOutlined, DislikeOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


export const PostItem = (
    {
        id,
        title,
        body,
        tags,
        reactions,
        views,
        userId
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
            {body}
        </List.Item>
    )
}
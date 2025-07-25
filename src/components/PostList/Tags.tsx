import { PostResponse } from "@/store/api/posts.api";
import { Flex, Tag } from "antd";


export const Tags = ({ tags }: Pick<PostResponse, 'tags'>) => {
    return (
        <Flex gap={4}>
            {tags.map((tag, index) => {
                return (
                    <Tag key={index}>{tag}</Tag>
                )
            })}
        </Flex>
    )
}
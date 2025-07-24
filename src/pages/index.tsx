import React from "react";
import { Layout, Typography } from 'antd';
import { NewsList } from "@/components/PostList/PostList";

const { Header, Content, Footer } = Layout;
const { Title } = Typography


export default function Home() {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Title level={1} style={{ color: '#fff' }}>News Media Holding</Title>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <NewsList />
      </Content>
    </Layout>
  );
}


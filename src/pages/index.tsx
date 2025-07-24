import React from "react";
import { Layout, Typography } from 'antd';
import { NewsList } from "@/components/PostList";
import styles from '@/styles/Home.module.css'

const { Header, Content } = Layout;
const { Title } = Typography


export default function Home() {

  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={1} className={styles.title}>News Media Holding</Title>
      </Header>
      <Content className={styles.content}>
        <NewsList />
      </Content>
    </Layout>
  );
}


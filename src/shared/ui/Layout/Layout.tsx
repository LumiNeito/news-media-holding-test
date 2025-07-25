import Head from "next/head"
import { Layout as AntLayout, Typography } from 'antd';
import React, { ReactNode } from "react";
import styles from './Layout.module.css'

const { Header, Content } = AntLayout;
const { Title } = Typography

interface LayoutProps {
    children: ReactNode
    title: string
    header: string
    description: string
}

export const Layout = ({ children, title, header, description }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AntLayout>
                <Header className={styles.header}>
                    <Title level={2} style={{ color: "white" }}>{header}</Title>
                </Header>
                <Content className={styles.content}>
                    {children}
                </Content>
            </AntLayout>
        </>
    )
}
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import { Breadcrumb, Button, Layout, Menu, Typography } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "@/store/slices/newsSlice";
import { RootState } from "@/store/store";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));


export default function Home() {
  const dispatch = useDispatch()
  const title = useSelector((state: RootState) => state.news.title)

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Button onClick={() => dispatch(setTitle('Ура! Всё работает!'))}>Установить заголовок</Button>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Button>kkl</Button>
          {title}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
function useAppSelector() {
  throw new Error("Function not implemented.");
}


import React from "react";
import { NewsList } from "@/components/PostList/PostList";
import { Layout } from '../shared/ui/Layout/Layout';

export default function Home() {
  return (
    <Layout title="News Media Holding" description="Последние события" header="News Media Holding">
      <NewsList />
    </Layout>
  );
}


import React from "react";
import useSWR from "swr";

// feature components
import { Layout } from "@/features/layout";
import { Table as CommunityTable } from "@/features/table";
import Podium from "@/features/podium";

// environment variables
const API_URL = import.meta.env.VITE_REPORT_SERVICE;

const fetcher = (url: string) => fetch(API_URL + url).then((res) => res.json());

const Community: React.FC = () => {
  const { data, error } = useSWR("/comments/active/comments?limit=10", fetcher);

  if (!data) return <div>loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      {/* Page content */}
      <main className="flex flex-col space-y-8 mt-8">
        <Podium users={data.data} />

        <hr className="border-gray-300" />

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-6">Top 10 most active users</h1>
          <CommunityTable users={data.data} />
        </div>
      </main>
    </Layout>
  );
};

export default Community;

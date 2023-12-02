import React from "react";

// feature components
import { Layout } from "@/features/layout";
import { Table } from "@/features/table";
import Podium from "@/features/podium";

const Community: React.FC = () => {
  return (
    <Layout>
      {/* Page content */}
      <main className="flex flex-col space-y-8 mt-8">
        <Podium />

        <hr className="border-gray-300" />

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-6">Top 10 most active users</h1>
          <Table />
        </div>
      </main>
    </Layout>
  );
};

export default Community;

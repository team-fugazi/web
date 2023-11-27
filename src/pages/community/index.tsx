import React from "react";

// feature components
import { Layout } from "@/features/layout";
import Podium from "@/features/podium";
import { Table } from "@/features/table";

const Community = () => {
  return (
    <Layout>
      {/* Page content */}
      <main className="flex flex-col space-y-8 mt-8">
        <Podium />

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-6">Top 10 most active users</h1>
          <Table />
        </div>
      </main>
    </Layout>
  );
};

export default Community;

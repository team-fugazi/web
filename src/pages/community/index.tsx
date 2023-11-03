import React from "react";

// feature components
import { Layout } from "@/features/layout";

const Community = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Community</h1>
      </div>

      {/* Page content */}
      <main className="grid grid-cols-4 gap-4">Community</main>
    </Layout>
  );
};

export default Community;

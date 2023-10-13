// import React from "react";

// features
import { Layout } from "@/features/layout";
import { ReportListItem } from "@/features/report/components/ReportListItem";

const Reports = () => {
  return (
    <Layout>
        {/* Page header */}
        <div className="py-8">
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        </div>

        {/* Page content */}
        <section className="flex flex-col space-y-4">
          {[...Array(10)].map((_, i) => (
            <ReportListItem key={i} />
          ))}
        </section>
    </Layout>
  );
};

export default Reports;

// import React from "react";

// feature components
import { Layout } from "@/features/layout";
import { DateFilter } from "@/features/report/components/DateFilter";
import { ReportListItem } from "@/features/report/components/ReportListItem";
import { SearchFilter } from "@/features/report/components/SearchFilter";
import { SeverityFilter } from "@/features/report/components/SeverityFilter";

const Reports = () => {
  return (
    <Layout>
      {/* Page header */}
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
      </div>

      {/* Page content */}
      <main className="grid grid-cols-4 gap-4">
        <section className="col-span-1 space-y-2 shrink-0 min-w-fit">
          <SearchFilter />
          <SeverityFilter />
          <DateFilter />
        </section>

        <section className="flex flex-col space-y-4 col-span-3">
          {[...Array(10)].map((_, i) => (
            <ReportListItem key={i} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Reports;

// import React from "react";
import useSWR from "swr";


// feature components
import { Layout } from "@/features/layout";
import { DateFilter } from "@/features/report/components/DateFilter";
import { ReportListItem } from "@/features/report/components/ReportListItem";
import { SearchFilter } from "@/features/report/components/SearchFilter";
import { SeverityFilter } from "@/features/report/components/SeverityFilter";

// types
import { Category } from "@/features/report/interfaces/Category";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Reports = () => {

  const url = new URL("http://127.0.0.1:8000/v1/categories");
  const { data, error } = useSWR(url.toString(), fetcher);

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      {/* Page header */}
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
      </div>

      {/* Page content */}
      <main className="grid grid-cols-4 gap-4">
        <section className="flex flex-col space-y-4 col-span-3">
          {data.map((cat: Category, i: React.Key) => (
            <ReportListItem category={cat} key={i} />
          ))}
        </section>

        <section className="col-span-1 space-y-2 shrink-0 min-w-fit">
          <SearchFilter />
          <SeverityFilter />
          <DateFilter />
        </section>
      </main>
    </Layout>
  );
};

export default Reports;

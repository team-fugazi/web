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
      <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-900 p-6 shadow-lg sm:flex-row sm:justify-between mt-4 mb-6">
        <div className="flex flex-col space-y-2">
          <strong className="text-xl text-white sm:text-xl">
            Reports from your community
          </strong>
          <small className="text-white text-xs">
            Over 1000 reports from your community. Use the filters to find what
          </small>
        </div>

        <a
          className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          href="/"
        >
          <span className="text-sm font-medium"> Let's Get Started </span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
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

import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";

// feature components
import { Layout } from "@/features/layout";
import { DateFilter } from "@/features/report/components/DateFilter";
import { ReportListItem } from "@/features/report/components/ReportListItem";
import { SearchFilter } from "@/features/report/components/SearchFilter";
import { SeverityFilter } from "@/features/report/components/SeverityFilter";
import { CategoryFilter } from "@/features/report/components/CategoryFilter";

// types
import {
  Report,
  Data as ReportData,
} from "@/features/report/interfaces/Reports";

// env
const API_URL = import.meta.env.VITE_REPORT_SERVICE;

const fetcher = (url: string) => fetch(API_URL + url).then((res) => res.json());

const Reports = () => {
  const [results, setResults] = React.useState([]);

  // fetch data
  const { data: categories, error: catErr } = useSWR("/categories", fetcher);
  const { data: reports, error: repErr } = useSWR<Report>("/reports", fetcher);

  // Callback function to handle search results
  const handleSearch = (results: []) => {
    setResults(results);
  };

  // data loading & error handling
  if (!reports && !categories) return <div>loading...</div>;
  if (repErr | catErr) return <div>failed to load</div>;

  return (
    <Layout>
      {/* Page header */}
      <div className="flex flex-col items-center gap-4 rounded-lg p-6 shadow-lg sm:flex-row sm:justify-between mt-4 mb-6 bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col space-y-2">
          <strong className="text-xl text-white sm:text-xl">
            Reports from your community
          </strong>
          <small className="text-white text-xs">
            Over 1000 reports from your community. Use the filters to find what
          </small>
        </div>

        <Link
          className="inline-flex items-center gap-2 rounded border border-white bg-white/90 px-8 py-3 text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          to="/community"
        >
          <span className="text-sm font-medium"> Check Community </span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Page content */}
      <main className="grid grid-cols-4 gap-4">
        <section className="flex flex-col space-y-4 col-span-3">
          {results.map((report: ReportData, i: React.Key) => (
            <ReportListItem report={report} key={i} />
          ))}

          {results.length === 0 &&
            reports !== undefined &&
            reports!.data.map((report: ReportData, i: React.Key) => (
              <ReportListItem report={report} key={i} />
            ))}
        </section>

        <section className="col-span-1 space-y-2 shrink-0 min-w-fit">
          <SearchFilter handleSearch={handleSearch} />
          <CategoryFilter categories={categories} />
          <SeverityFilter />
          <DateFilter />
        </section>
      </main>
    </Layout>
  );
};

export default Reports;

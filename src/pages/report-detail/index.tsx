// import React from "react";
import useSWR from "swr";
import { useParams, Link } from "react-router-dom";

// feature components
import { Layout } from "@/features/layout";
import { ReportListItem } from "@/features/report/components/ReportListItem";

// types
// import { Category } from "@/features/report/interfaces/Category";

// icons
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Comments } from "@/features/comments";
import { StatCard } from "@/features/report/components/StatCard";

const fetcher = (url: string) =>
  fetch("http://127.0.0.1:8000" + url).then((res) => res.json());

const ReportDetail = () => {
  const { reportId } = useParams();
  const { data, error } = useSWR(`/v1/categories/${reportId}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="flex justify-start space-x-2 pt-8">
        <Link
          to={`/reports`}
          className="text-sm font-semibold uppercase leading-relaxed text-blue-500 hover:text-blue-800"
        >
          <ArrowLeftIcon className="inline h-5 w-5 mr-2" />
          Back to reports
        </Link>
      </div>

      {/* Page header */}
      <div className="pt-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Report: {data.name}
        </h1>
      </div>

      {/* Page content */}
      <main className="pt-8 grid grid-cols-5 gap-4">
        <section className="flex flex-col space-y-4 col-span-3">
          <ReportListItem category={data} />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full max-w-6xl">
            <StatCard title="Average sentence length" value={8430} />
            <StatCard title="Named entities" value={-211} />
            <StatCard title="Sentiment analysis" value={79} />
            <StatCard title="Flesch-Kincaid" value={-2} />
            <StatCard title="Most Frequent Words" value={15} />
            <StatCard title="Average Sentence Length" value={20} />
            <StatCard title="Readability (Flesch-Kincaid)" value={-2.5} desc="mol" />
            <StatCard title="Spelling Errors" value={5} />
            <StatCard title="Grammar Errors" value={2} />
          </div>
        </section>

        <section className="flex flex-col space-y-4 col-span-2">
          <Comments report={data} />
        </section>
      </main>
    </Layout>
  );
};

export default ReportDetail;

import React from "react";
import { Link } from "react-router-dom";

// components
// import CategoryChip from "./CategoryChip";

// utils
import { formatDate } from "../utils/format-date";

// types
import { Data as ReportData } from "@/features/report/interfaces/Reports";

interface Props {
  report: ReportData;
}

export const ReportListItem: React.FC<Props> = ({ report }) => {
  const formattedDate = formatDate(new Date(report.created_at));

  return (
    <div className="flow-root rounded border border-gray-200 py-3">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Reporter</dt>
          <dd className="text-gray-700 sm:col-span-2">@John Doe</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Date</dt>
          <dd className="text-gray-700 sm:col-span-2">{formattedDate}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Attachments:</dt>
          <dd className="sm:col-span-2">
            <a
              className="text-blue-500"
              href={report.original_post}
              target="_blank"
              rel="noreferrer"
            >
              Original Post
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Report Category</dt>
          <dd className="text-gray-700 sm:col-span-2">
            
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Content</dt>
          <dd className="text-gray-700 sm:col-span-2 ">
            {report.description}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">See more</dt>
          <dd className="text-blue-500 sm:col-span-2 ">
            <Link to={`/reports/${report._id}`}>See more</Link>
          </dd>
        </div>
      </dl>
    </div>
  );
};

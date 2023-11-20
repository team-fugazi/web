import { Link } from "react-router-dom";

// types
import { Category } from "@/features/report/interfaces/Category";
import CategoryChip from "./CategoryChip";

export const ReportListItem = ({ category }: { category: Category }) => {
  return (
    <div className="flow-root rounded border border-gray-200 py-3">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Reporter</dt>
          <dd className="text-gray-700 sm:col-span-2">@John Doe</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Date</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {new Date().getDate().toString()}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Attachments:</dt>
          <dd className="sm:col-span-2">
            <a className="text-blue-500" href="www.google.com">
              Link
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Report Category</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <CategoryChip category={category} />
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Content</dt>
          <dd className="text-gray-700 sm:col-span-2 ">
            {category.description}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">See more</dt>
          <dd className="text-blue-500 sm:col-span-2 ">
            <Link to={`/reports/${category.id}`}>See more</Link>
          </dd>
        </div>
      </dl>
    </div>
  );
};

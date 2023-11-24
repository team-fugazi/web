import React from "react";

// components
import CategoryChip from "./CategoryChip";

// utils
import { formatDate } from "../utils/FormatDate";

// types
import { Category } from "../interfaces/Category";

interface Props {
  category: Category;
}

export const ReportDetails: React.FC<Props> = ({ category }) => {
  const formattedDate = formatDate(new Date());

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
              href="https://www.reddit.com/r/rust/comments/17xa7mp/anyone_know_of_any_decent_alternatives_to/"
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
            <CategoryChip category={category} />
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Content</dt>
          <dd className="text-gray-700 sm:col-span-2 ">
            {category.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid fuga. Sint.
          </dd>
        </div>
      </dl>
    </div>
  );
};

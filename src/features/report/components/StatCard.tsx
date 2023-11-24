import React from "react";

interface Props {
  title: string;
  value: number;
  desc?: string;
}

export const StatCard: React.FC<Props> = ({ title, value, desc }) => {
  return (
    <div className="flex items-top p-3 rounded border border-gray-200">
      {value >= 0 ? (
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-10 w-10 rounded">
          <svg
            className="w-4 h-4 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-10 w-10 rounded">
          <svg
            className="w-4 h-4 fill-current text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="flex-grow flex flex-col ml-4">
        <span className="text-lg font-semibold">{value} <span className="text-xs text-gray-500">{desc}</span></span>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{title}</span>
        </div>
      </div>
    </div>
  );
};

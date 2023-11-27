import { useState } from "react";

export const DateFilter = () => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  return (
    <details className="overflow-hidden rounded border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
        <span className="text-sm font-medium"> Period </span>

        <span className="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div className="border-t border-gray-200 bg-white">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-700">
            {startDate?.toString()} - {endDate?.toString()}
          </span>

          <button
            type="button"
            className="text-sm text-gray-900 underline underline-offset-4"
          >
            Reset
          </button>
        </header>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between gap-4">
            <label
              htmlFor="filterStartDate"
              className="flex items-center gap-2"
            >
              <span className="text-sm text-gray-600 sr-only">Start date</span>
              <input
                type="date"
                id="filterStartDate"
                placeholder="From"
                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                onChange={() => setStartDate(startDate)}
              />
            </label>

            <label htmlFor="filterEndDate" className="flex items-center gap-2">
              <span className="text-sm text-gray-600 sr-only">End date</span>

              <input
                type="date"
                id="filterEndDate"
                placeholder="To"
                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                onChange={() => setEndDate(endDate)}
              />
            </label>
          </div>
        </div>
      </div>
    </details>
  );
};

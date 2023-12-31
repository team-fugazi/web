import { useState, useEffect } from "react";
import { CategoryMap } from "../interfaces/CategoryMap";

// interfaces & types
import { Category } from "@/features/report/interfaces/Category";

interface Props {
  categories: Category[];
}

export const CategoryFilter: React.FC<Props> = ({ categories }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selected, setSelected] = useState<CategoryMap>({
    high: false,
    medium: false,
    low: false,
  });

  // Update the selected state when a checkbox is clicked
  const handleSelect = (value: keyof CategoryMap) => {
    setSelected((prev) => ({ ...prev, [value]: !prev[value] }));
    setSelectedCount((prev) => prev + (selected[value] ? -1 : 1));
  };

  // Select all checkboxes
  const selectAll = () =>
    setSelected({
      high: true,
      medium: true,
      low: true,
    });

  // Reset all checkboxes
  const resetSelection = () =>
    setSelected({
      high: false,
      medium: false,
      low: false,
    });

  // Update the selected state when the selected state changes
  useEffect(() => {
    const selectedValuesCount = Object.values(selected).filter(
      (value) => value === true
    ).length;
    setSelectedCount(selectedValuesCount);
    setSelectedAll(selectedValuesCount === Object.keys(selected).length);
  }, [selected]);

  return (
    <details className="overflow-hidden rounded border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
        <span className="text-sm font-medium">Categories</span>

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
            {selectedCount} Selected
          </span>

          <button
            type="button"
            className="text-sm text-gray-900 underline underline-offset-4"
            onClick={resetSelection}
          >
            Reset
          </button>
        </header>

        <ul className="space-y-1 border-t border-gray-200 p-4">
          <li>
            <label
              htmlFor="FilterInStock"
              className="inline-flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="FilterInStock"
                className="h-5 w-5 rounded border-gray-300"
                value={selectedAll.toString()}
                onChange={selectAll}
              />

              <span className="text-sm font-medium text-gray-700">All</span>
            </label>
          </li>

          {categories.map((category: Category, key: React.Key) => (
            <li key={key}>
              <label
                htmlFor="FilterInStock"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="FilterInStock"
                  className="h-5 w-5 rounded border-gray-300"
                  value={selected.high.toString()}
                  onChange={() => handleSelect("high")}
                />

                <span className="text-sm font-medium text-gray-700">
                  {category.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

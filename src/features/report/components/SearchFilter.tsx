import { useState } from "react";

export const SearchFilter = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search);

  return (
    <div className="w-full flex items-center justify-between gap-4 overflow-hidden rounded border border-gray-200 shadow-sm">
      <input
        type="text"
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

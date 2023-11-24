import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";

const searchAPI = async (query: string) => {
  const response = await fetch(
    `http://localhost:8000/v1/search/reports?query=${query}`
  );
  const data = await response.json();
  return data;
};

export const SearchFilter: React.FC<{ handleSearch: (res: []) => void }> = ({
  handleSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // handle search input changes
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // handle search on debounced search term
  useEffect(() => {
    const searchReports = async () => {
      let results = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await searchAPI(debouncedSearchTerm);
        results = data?.data || [];
      }

      setIsSearching(false);
      handleSearch(results);
    };

    searchReports();
  }, [debouncedSearchTerm]);

  return (
    <div className="w-full flex items-center justify-between gap-4 overflow-hidden rounded border border-gray-200 shadow-sm">
      <input
        type="text"
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition disabled:bg-gray-400"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
        disabled={isSearching}
      />
    </div>
  );
};

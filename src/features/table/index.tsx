import React from "react";

export const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              User
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              # Comments
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              # Reports
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              # Moderations
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {[...Array(10)].map((_, i) => (
            <tr key={i}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Frederik Bode
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                1093
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">354</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">24</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

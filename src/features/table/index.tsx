import React from "react";

// types
import { Datum as User } from "@/features/table/interfaces/data";

interface Props {
  users: User[];
}

export const Table: React.FC<Props> = ({ users }) => {
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
          {users.map((user: User, i) => (
            <tr key={i}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {user._id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.comments}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.reports ? user.reports : 0 }</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">24</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

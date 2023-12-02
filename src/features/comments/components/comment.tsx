import React from "react";
import { User } from "@auth0/auth0-react";
import { twMerge } from "tailwind-merge";

import { Comment as CommentType } from "@/features/report/interfaces/ReportFull";

import { formatDate } from "@/features/report/utils/format-date";

// interfaces
interface Props {
  comment: CommentType;
  user: User;
}

export const Comment: React.FC<Props> = ({ comment, user }) => {
  const formattedDate = formatDate(new Date(comment.created_at));
  const isPoster = user.sub === comment.user;

  return (
    <article className={twMerge("rounded border border-gray-200 p-3")}>
      <div className="flex items-start sm:gap-3">
        <div className="flex flex-shrink-0 items-center justify-center border h-10 w-10 rounded">
          <img src={user.picture} alt="" className="rounded" />
        </div>

        <div>
          <p className="text-sm font-light subpixel-antialiased text-gray-800">
            {comment.content}
          </p>

          <div className="mt-3 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <p className="text-xs font-light cursor-default">
                {formattedDate}
              </p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="text-xs font-light text-gray-500">
              <a href="#" className="hover:underline hover:text-gray-700">
                {user.given_name}
              </a>
            </p>

            {isPoster && (
              <>
                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>
                <p className="text-xs font-light text-gray-500">
                  <a href="#" className="hover:underline hover:text-gray-700">
                    Delete
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

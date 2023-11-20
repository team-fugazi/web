import React from "react";

import { CommentType } from "../interfaces/CommentType";

export const Comment: React.FC<CommentType> = (comment) => {
  return (
    <article className="rounded border border-gray-200 p-3">
      <div className="flex items-start sm:gap-3">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-10 w-10 rounded">
          <svg
            className="w-4 h-4 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div>
          <p className="text-sm text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint. {comment.comment}
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

              <p className="text-xs font-medium">{comment.date}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Commented by{" "}
              <a href="#" className="underline hover:text-gray-700">
                {comment.user}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

import React from "react";

import { CommentTypeUser } from "../interfaces/CommentType";

export const Comment: React.FC<CommentTypeUser> = (comment) => {
  return (
    <article className="rounded border border-gray-200 p-3">
      <div className="flex items-start sm:gap-3">
        <div className="flex flex-shrink-0 items-center justify-center border h-10 w-10 rounded">
          <img src={comment.user.picture} alt="" className="rounded" />
        </div>

        <div>
          <p className="text-sm font-light subpixel-antialiased text-gray-700">
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
                {comment.user.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

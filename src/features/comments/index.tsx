import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// components
import { Comment } from "./components/comment";

// interfaces
import { Category } from "../report/interfaces/Category";
// import { CommentType } from "./interfaces/CommentType";
import { CommentTypeUser } from "./interfaces/CommentType";

interface Props {
  report: Category;
}

export const Comments = ({ report }: Props) => {
  const { user } = useAuth0();

  const PostComment = async () => {
    await fetch(`http://127.0.0.1:8000/v1/categories/${report.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: "this is a comment",
      }),
    });
  };

  const demoComment: CommentTypeUser = {
    comment: "this is a comment",
    date: "20/11-2023",
    user: user!,
  };

  return (
    <article className="space-y-3">
      <label
        htmlFor="comment"
        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600"
      >
        <span className="text-xs font-medium text-gray-700">
          Provide your opinion
        </span>

        <textarea
          rows={3}
          id="comment"
          onSubmit={PostComment}
          placeholder="Start typing..."
          className="mt-1 w-full border-none resize-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>

      <Comment
        comment={demoComment.comment}
        date={demoComment.date}
        user={demoComment.user}
      />

      <Comment
        comment={demoComment.comment}
        date={demoComment.date}
        user={demoComment.user}
      />

      <Comment
        comment={demoComment.comment}
        date={demoComment.date}
        user={demoComment.user}
      />
    </article>
  );
};
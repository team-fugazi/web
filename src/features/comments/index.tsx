import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

// components
import { Comment } from "./components/comment";

// icons
import { PaperPlaneIcon } from "@radix-ui/react-icons";

// interfaces
import { Category } from "../report/interfaces/Category";
import { CommentTypeUser } from "./interfaces/CommentType";

interface Props {
  report: Category;
}

export const Comments: React.FC<Props> = ({ report }) => {
  const [comment, setComment] = React.useState<string>(""); // [
  const { user } = useAuth0();

  const PostComment = async () => {
    // Send comment to backend
    const response = await fetch(
      `http://127.0.0.1:8000/v1/categories/${report.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
        }),
      }
    );

    // Check if response is ok
    if (!response.ok) {
      toast.error("Something went wrong! 😢");
      return;
    }

    // Notify user
    toast.success("Comment posted! 🌟");
    setComment("");
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
        className="block overflow-hidden rounded border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600"
      >
        <span className="text-xs font-medium text-gray-700">
          Provide your opinion
        </span>

        <div className="flex flex-col items-end gap-2">
          <textarea
            rows={3}
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Start typing..."
            className="mt-1 w-full border-none resize-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <button
            className="w-6 h-6 rounded bg-gray-600 hover:bg-gray-400 flex items-center justify-center"
            onClick={PostComment}
          >
            <PaperPlaneIcon className="inline h-3 w-3 text-white -rotate-45" />
          </button>
        </div>
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

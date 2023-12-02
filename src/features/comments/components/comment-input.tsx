import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { mutate } from "swr";

// icons
import { PaperPlaneIcon } from "@radix-ui/react-icons";

// controllerimport { }

import { Data as ReportFull } from "@/features/report/interfaces/ReportFull";

interface Props {
  report: ReportFull;
}

const API_URL = import.meta.env.VITE_REPORT_SERVICE;

export const CommentInput: React.FC<Props> = ({ report }) => {
  const [comment, setComment] = React.useState<string>("");
  const { user } = useAuth0();

  const PostComment = async () => {
    // Send comment to backend
    const response = await fetch(`${API_URL}/reports/${report._id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user!.sub,
        content: comment,
      }),
    });

    // Check if response is ok
    if (!response.ok) {
      toast.error("Something went wrong! 😢");
      return;
    }

    // Notify user
    toast.success("Comment posted! 🌟");
    mutate(`${API_URL}/reports/${report._id}`);
    setComment("");
  };

  return (
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
  );
};

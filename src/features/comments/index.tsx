import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { mutate } from "swr";

// data
import { commentMessages as messages} from "@/data/messages";

// controller
import commentController from "./controller/comment";

// components
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Comment } from "./components/comment";

// icons
import { PaperPlaneIcon } from "@radix-ui/react-icons";

import {
  Comment as CommentType,
  Data as ReportFull,
} from "../report/interfaces/ReportFull";

// API URL
const API_URL = import.meta.env.VITE_REPORT_SERVICE;

interface Props {
  report: ReportFull;
}

export const Comments: React.FC<Props> = ({ report }) => {
  const [comment, setComment] = React.useState<string>("");
  const { user } = useAuth0();

  const postComment = async () => {
    // Send comment to backend
    const response = await commentController.postComment({
      id: report._id,
      user: user!.sub ? user!.sub : "",
      comment: comment,
    });

    // Check if response is ok
    if (!(response.status === 200)) {
      console.log(response);
      toast.error(messages.error);
      return;
    }

    // Notify user
    toast.success(messages.success);
    mutate(`${API_URL}/reports/${report._id}`);
    setComment("");
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
            onClick={postComment}
          >
            <PaperPlaneIcon className="inline h-3 w-3 text-white" />
          </button>
        </div>
      </label>

      <ScrollArea.Root className="w-full h-2/3 rounded overflow-hidden  ">
        <ScrollArea.Viewport className="w-full h-full rounded">
          <div className="flex flex-col gap-3">
            {report.comments.map((comment: CommentType) => {
              return (
                <Comment
                  key={comment._id}
                  report={report}
                  comment={comment}
                  user={user!}
                />
              );
            })}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-blackA5" />
      </ScrollArea.Root>
    </article>
  );
};

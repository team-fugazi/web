import React from "react";
import { User } from "@auth0/auth0-react";
import { mutate } from "swr";

// environment variables
const API_URL = import.meta.env.VITE_REPORT_SERVICE;

const useComment = () => {
  const [comment, setComment] = React.useState<string>("");
  const [error, setError] = React.useState<unknown>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const PostComment = async (reportId: string, user: User) => {
    setLoading(true);

    // Send comment to backend
    try {
      const response = await fetch(`${API_URL}/reports/${reportId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user!.sub,
          content: comment,
        }),
      });

      // Check if response is ok
      if (!response.ok) {
        setError("Something went wrong! 😢");
        return;
      } else {
        
      }

      // Notify user
      mutate(`${API_URL}/reports/${reportId}`);
      setComment("");
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    comment,
    setComment,
    error,
    setError,
    loading,
    setLoading,
    PostComment,
  };
};

export default useComment;

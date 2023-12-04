import axios from "axios";

// environment variables
const API_URL = import.meta.env.VITE_API_URL;


// Post comment
interface postProps {
  id: string;
  user: string;
  comment: string;
}

const postComment = async ({ id, user, comment }: postProps) => {
  const response = await axios.post(`${API_URL}/reports/${id}/comment`, {
    user: user,
    content: comment,
  });
  return response;
};

// Delete comment
interface deleteProps {
  reportId: string;
  commentId: string;
}

const deleteComment = async ({ reportId, commentId }: deleteProps) => {
  const response = await axios.delete(
    `${API_URL}/reports/${reportId}/comment/${commentId}`
  );
  return response;
};

const commentController = Object.freeze({
  postComment,
  deleteComment,
});

export default commentController;

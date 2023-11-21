import { User } from "@auth0/auth0-react";

export type CommentType = {
  comment: string;
  date: string;
  user: string;
};

export type CommentTypeUser = {
  comment: string;
  date: string;
  user: User;
};

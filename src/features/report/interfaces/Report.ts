// Path: src/interfaces/Report.ts

// Subtypes
import { Category } from "./Category";
import { Comment } from "./Comment";
import { Attachment } from "./Attachment";
import { Action } from "./Action";

export type Report = {
  report_id: string;
  user_id: string;
  category: Category;
  comments: Comment[] | [];
  attachments: Attachment[] | [];
  actions: Action[] | [];
  description: string;
  created_at: Date;
};

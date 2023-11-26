export interface Main {
  status: number;
  meta: Meta;
  data: Data;
}

export interface Data {
  _id: string;
  description: string;
  original_post: string;
  created_at: Date;
  user: string;
  category: Category;
  comments: Comment[];
  actions: Action[];
}

export interface Category {
  _id: string;
  category_id: number;
  name: string;
  description: string;
}

export interface Comment {
  _id: string;
  user: string;
  content: string;
  created_at: Date;
  updated_at: null;
  deleted_at: null;
}

export interface Action {
    _id: string;
    user: string;
    content: string;
    created_at: Date;
    updated_at: null;
    deleted_at: null;
  }
  

export interface Meta {
  "api-version": string;
  request_timestamp: Date;
  request_id: string;
}

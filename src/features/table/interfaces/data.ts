export interface Main {
  status: number;
  meta: Meta;
  data: Datum[];
}

export interface Datum {
  _id: string;
  comments: number;
  reports: number;
}

export interface Meta {
  "api-version": string;
  request_timestamp: Date;
  request_id: string;
}

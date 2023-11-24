export interface Report {
    status: number;
    meta:   Meta;
    data:   Data[];
}

export interface Data {
    _id:           string;
    description:   string;
    original_post: string;
    created_at:    Date;
    user:          string;
    category:      string;
    comments:      string[];
    actions:       string[];
}

export interface Meta {
    "api-version":     string;
    request_timestamp: Date;
    request_id:        string;
    total_count:       number;
}

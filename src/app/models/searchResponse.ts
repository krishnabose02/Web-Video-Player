export interface Post {
channel_id: number;
category_name: string;
category_id: number;
channel_name: string;
channel_image: string;
channel_url: string;
channel_description: string;
channel_type: string;
video_id: string;
}

export interface SearchResponse {
status: string;
count: number;
count_total: number;
pages: number;
posts: Post[];
}

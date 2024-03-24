interface LayoutType {
  height: number;
  url: string;
  width: number;
}

interface SnippetType {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: { default: LayoutType; medium: LayoutType; high: LayoutType };
  title: string;
}

interface VideoDataType {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
}

interface VideoValueType {
  etag: string;
  items: VideoDataType[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
  error: null;
  loading: boolean;
}

export interface ClickedValueType extends VideoDataType {
  snippet?: SnippetType;
}

export interface ClickedVideoSelectorType {
  clickedValue: VideoValueType;
  loading: boolean;
  error: null;
}

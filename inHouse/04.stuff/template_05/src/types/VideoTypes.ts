interface LayoutType {
  height: number;
  url: string;
  width: number;
}

interface SnippetType {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent?: string;
  publishTime?: string;
  publishedAt: string;
  thumbnails: { default: LayoutType; medium: LayoutType; high: LayoutType };
  title: string;
  type?: string;
}

interface SearchVideoSnippetType {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: LayoutType;
  title: string;
}

interface TopLevelSnippetType {
  authorChannelId: {
    value: string;
  };
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  canRate: true;
  channelId: string;
  likeCount: number;
  publishedAt: string;
  textDisplay: string;
  textOriginal: string;
  updatedAt: string;
  videoId: string;
  viewerRating: string;
}

interface CommentSnippetType {
  canReply: boolean;
  channelId: string;
  isPublic: boolean;
  topLevelComment: {
    etag: string;
    id: string;
    kind: string;
    snippet: TopLevelSnippetType;
  };
  totalReplyCount: number;
  videoId: string;
}

interface VideoDataType {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: SnippetType;
}

interface SearchVideoDataType {
  etag: string;
  items: VideoValueType[];
  id: { kind: string; videoId: string };
  kind: string;
  snippet: SearchVideoSnippetType;
}

interface CommentItemType {
  etag: string;
  id: string;
  kind: string;
  snippet: CommentSnippetType;
}

interface CommentDataType {
  etag: string;
  items: CommentItemType[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

interface RecommendedDataType {
  contentDetails: {
    upload: {
      videoId: string;
    };
  };
  etag: string;
  id: string;
  kind: string;
  snippet: SnippetType;
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
  error?: null;
  loading?: boolean;
}

export interface ClickedValueType extends VideoDataType {}

export interface FirstVideoType {
  videos: VideoValueType;
}

export interface SearchVideoType {
  clickedVideos: object;
  error: null;
  loading: boolean;
  searchVal: SearchVideoDataType;
}

export interface ClickedVideoSelectorType {
  clickedValue: VideoValueType;
  loading: boolean;
  error: null;
}

export interface CommentType {
  comments: CommentDataType;
}

export interface clickedIdSelectorType {
  clickedVideo: {
    etag: string;
    id: { kind: string; videoId: string };
    kind: string;
    snippet: SnippetType;
  };
}

export interface RecommendedSelectorType {
  error: null;
  loading: boolean;
  recommendeds: {
    etag: string;
    items: RecommendedDataType[];
    kind: string;
    nextPageToken: string;
    pageInfo: { totalResults: number; resultsPerPage: number };
  };
}

export interface VideoAddInfosSelectorType {
  clickedValue: {
    etag: string;
    items: {
      contentDetails: {
        caption: string;
        contentRating: {};
        definition: string;
        dimension: string;
        duration: string;
        licensedContent: boolean;
        projection: string;
        regionRestriction: { allowed: string[] };
      };
      etag: string;
      id: string;
      kind: string;
      snippet: {
        categoryId: string;
        channelId: string;
        channelTitle: string;
        defaultAudioLanguage: string;
        defaultLanguage: string;
        description: string;
        liveBroadcastContent: string;
        localized: {
          description: string;
          title: string;
        };
        publishedAt: string;
        tags: string[];
        thumbnails: {
          default: LayoutType;
          high: LayoutType;
          maxres: LayoutType;
          medium: LayoutType;
          standard: LayoutType;
        };
        title: string;
      };
      statistics: {
        commentCount: string;
        favoriteCount: string;
        viewCount: string;
        likeCount: string;
      };
    };
    kind: string;
    pageInfo: { resultsPerPage: number; totalResults: number };
  };
  error: null;
  loading: boolean;
}

const layoutObj = {
  height: 0,
  url: "",
  width: 0,
};

const snippetObj = {
  channelId: "",
  channelTitle: "",
  description: "",
  liveBroadcastContent: "",
  publishTime: "",
  publishedAt: "",
  thumbnails: layoutObj,
  title: "",
};

const clickedIdSnippetObj = {
  channelId: "",
  channelTitle: "",
  description: "",
  liveBroadcastContent: "",
  publishTime: "",
  publishedAt: "",
  thumbnails: {
    default: layoutObj,
    medium: layoutObj,
    high: layoutObj,
  },
  title: "",
};

export const videoObj = {
  etag: "",
  items: [],
  kind: "",
  nextPageToken: "",
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
  regionCode: "",
  error: null,
  loading: false,
  id: { kind: "", videoId: "" },
  snippet: snippetObj,
};
export const videoInfosItemObj = [
  {
    contentDetails: {
      caption: "",
      contentRating: {},
      definition: "",
      dimension: "",
      duration: "",
      licensedContent: false,
      projection: "",
      regionRestriction: { allowed: [] },
    },
    etag: "",
    id: "",
    kind: "",
    snippet: {
      categoryId: "",
      channelId: "",
      channelTitle: "",
      defaultAudioLanguage: "",
      defaultLanguage: "",
      description: "",
      liveBroadcastContent: "",
      localized: {
        description: "",
        title: "",
      },
      publishedAt: "",
      tags: [],
      thumbnails: {
        default: layoutObj,
        high: layoutObj,
        maxres: layoutObj,
        medium: layoutObj,
        standard: layoutObj,
      },
      title: "",
    },
    statistics: {
      commentCount: "",
      favoriteCount: "",
      viewCount: "",
      likeCount: "",
    },
  },
];
export const videoInfosObj = {
  etag: "",
  items: videoInfosItemObj,
  kind: "",
  pageInfo: { resultsPerPage: 0, totalResults: 0 },
  error: null,
  loading: false,
};

export const commentObj = {
  etag: "",
  items: [],
  kind: "",
  nextPageToken: "",
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
};

export const clickedIdObj = {
  contentDetails: {
    upload: {
      videoId: "",
    },
  },
  etag: "",
  id: { kind: "", videoId: "" },
  kind: "",
  snippet: clickedIdSnippetObj,
};
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
  etag: "",
  id: { kind: "", videoId: "" },
  kind: "",
  snippet: clickedIdSnippetObj,
};

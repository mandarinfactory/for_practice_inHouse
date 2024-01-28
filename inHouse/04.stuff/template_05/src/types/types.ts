export interface FirstVideoState {
  videos: any[];
}

export interface LoadingError {
  loading: boolean;
  error: null;
}

export interface SearchInputState extends LoadingError {
  searchVal: string;
  clickedVideos: any[];
}

export interface CommentState extends LoadingError {
  comments: string[],
}

export interface ClickedButtonPageState extends LoadingError {
  clickedValue: string
}


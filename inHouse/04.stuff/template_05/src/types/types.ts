export interface FirstVideoState {
  videos: any[];
}

export interface VideoCommentsState {
  comments: any[];
}

export interface LoadingError {
  loading: boolean;
  error: null;
}

export interface DarkmodeState {
  isDark: boolean;
}

export interface SearchInputState extends LoadingError {
  searchVal: string;
  clickedVideos: any[];
}

export interface RecommendedState extends LoadingError {
  recommendeds: string[];
}

export interface DictaphoneState {
  mic: boolean;
  micValue: string;
}

export interface VideoIsClickedState {
  clickedVideo: number;
}

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

export interface RecommendedState extends LoadingError {
  recommendeds: string[];
}

export interface ClickedButtonPageState extends LoadingError {
  clickedValue: string;
}

export interface DictaphoneState {
  mic: boolean;
  micValue: string;
}

export interface VideoIsClickedState {
  clickedVideo: number;
}

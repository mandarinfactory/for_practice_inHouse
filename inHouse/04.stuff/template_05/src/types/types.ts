export interface InitialState {
  searchVal: string;
  videos: HomePageVideos[];
  clickedVideos: [{ key: string; value: string }];
  comments: HomePageVideos[];
  loading: boolean;
  error: null;
}

export interface HomePageVideos {
  items: {
    string: any;
  };
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomepageVideos } from "../store/reducers/getHomepageVideos";
import { getSearchVideos } from "../store/reducers/getSearchVideos";

const Hero: React.FC = () => {
  const dispatch = useDispatch<any>();
  const videoSelector = useSelector<any>((state) => state.youtubeApp);

  useEffect(() => {
    dispatch(getHomepageVideos());
  }, [dispatch]);

  return (
    <>
      <div className="w-[85%] flex flex-wrap justify-center">
        {videoSelector?.videos?.items?.map(
          (value: { key: string; value: any }, id: number) => (
            <div className="w-[290px] h-300px m-3" key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${value.id.videoId}?autoplay-1`}
                className="w-[290px] h-[200px] rounded-3xl"
              ></iframe>
              <h1 className="text-lg my-2 overflow-hidden truncate">
                {value.snippet.title}
              </h1>
              <p className="text-xs">채널이름 : {value.snippet.channelTitle}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Hero;

/* export const myApiSlice = createSlice({
  name: "myApi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataFailure: (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataStart, fetchDataFailure } =
  myApiSlice.actions;

export default myApiSlice.reducer;

import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "../slices/myApiSlice";

export const fetchApiData = (inputValue) => async (dispatch) => {
  try {
    dispatch(fetchDataStart());

    // 여기서 특정 요청 헤더를 추가합니다.
    const headers = {
      "Content-Type": "application/json",
      "Custom-Header": "your-custom-value", // 특정 헤더 추가
    };

    const response = await fetch(
      `https://api.example.com/data?input=${inputValue}`,
      {
        method: "GET", // 또는 다른 HTTP 메서드 사용
        headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

import { configureStore } from "@reduxjs/toolkit";
import myApiReducer from "./slices/myApiSlice";
import { fetchApiData } from "./thunks/myApiThunk";

const store = configureStore({
  reducer: {
    myApi: myApiReducer,
  },
});

store.dispatch(fetchApiData("your-input-value"));
 */
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";

const Video: React.FC = () => {
  const videoSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp
  );  

  const videoAddInfosSelector = useSelector(
    (state: RootState) => state.clickedVideoInfoApp
  );

  return (
    <div className="w-full h-full">
      {!videoSelector.clickedVideo.contentDetails
        ? Object.entries(videoSelector).map(
            (value, index: number) => (
              <div
                className="w-full h-full flex flex-col justify-center items-center"
                key={index}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${value[1].id.videoId}?autoplay=1&mute=1`}
                  className="w-full h-[800px] rounded-3xl"
                ></iframe>
                <div className="w-full my-7 flex flex-col justify-start items-start p-3 bg-slate-50 rounded-3xl shadow-xl dark:bg-neutral-700 dark:text-white">
                  <h1 className="mb-3 text-2xl sm:text-lg">{value[1].snippet.title}</h1>
                  <div className="flex items-center my-3">
                    <h1 className="text-xl px-3 py-2.5 mr-3 bg-sky-700 text-white rounded-3xl">
                      {value[1]?.snippet.channelTitle}
                    </h1>
                    <div className="flex justify-center items-center px-3 py-2 text-white bg-sky-400 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 mr-2"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      <p className="p-1">
                        {
                          videoAddInfosSelector.clickedValue.items[0]
                            .statistics.likeCount
                        }
                        개
                      </p>
                    </div>
                  </div>
                  <p>
                    조회수 :{" "}
                    {
                      videoAddInfosSelector.clickedValue.items[0].statistics
                        .viewCount
                    }
                    개
                  </p>
                  <p>
                    댓글 :{" "}
                    {
                      videoAddInfosSelector.clickedValue.items[0].statistics
                        .commentCount
                    }
                    개
                  </p>
                  <p className="sm:hidden">{value[1].snippet.description}</p>
                </div>
              </div>
            )
          )
        : Object.entries(videoSelector).map<any>(
            (value, index: number) => (
              <div
                className="w-full h-full flex flex-col justify-center items-center"
                key={index}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${value[1]?.contentDetails.upload.videoId}?autoplay=1&mute=1`}
                  className="w-full h-[800px] rounded-3xl"
                ></iframe>
                <div className="w-full my-7 flex flex-col justify-start items-start p-3 bg-slate-50 rounded-3xl shadow-xl dark:bg-neutral-700 dark:text-white">
                  <h1 className="text-2xl sm:text-lg">{value[1].snippet.title}</h1>
                  <div className="flex items-center my-3">
                    <h1 className="text-xl px-3 py-2.5 mr-3 bg-sky-700 text-white rounded-3xl">
                      {value[1]?.snippet.channelTitle}
                    </h1>
                    <div className="flex justify-center items-center px-3 py-2 text-white bg-sky-400 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 mr-2"
                      >
                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                      </svg>
                      <p className="p-1">
                        {
                          videoAddInfosSelector.clickedValue?.items[0]
                            .statistics.likeCount
                        }
                        개
                      </p>
                    </div>
                  </div>
                  <p>
                    조회수 :{" "}
                    {
                      videoAddInfosSelector.clickedValue?.items[0].statistics
                        .viewCount
                    }
                    개
                  </p>
                  <p>
                    댓글 :{" "}
                    {
                      videoAddInfosSelector.clickedValue?.items[0].statistics
                        .commentCount
                    }
                    개
                  </p>
                  <p className="sm:hidden">{value[1]?.snippet.description}</p>
                </div>
              </div>
            )
          )}
    </div>
  );
};

export default Video;

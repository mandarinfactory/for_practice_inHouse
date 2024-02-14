import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVideoComments } from "../store/reducers/getVideoComments";
import { RootState } from "../store/store";

const Comments: React.FC = () => {
  const dispatch = useDispatch();
  const commentSelector = useSelector(
    (state: RootState) => state.videoCommentsApp
  );
  const clickedIdSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp
  );
  const videoId = clickedIdSelector.clickedVideo.contentDetails
    ? clickedIdSelector?.clickedVideo.contentDetails.upload?.videoId
    : clickedIdSelector?.clickedVideo?.id?.videoId;

  useEffect(() => {
    dispatch<any>(getVideoComments(videoId));
  }, [dispatch, videoId]);

  return (
    <div className="w-[75%] h-auto">
      {commentSelector?.comments?.items?.map((value: any, index: any) => (
        <div className="flex my-7" key={index}>
          <img
            src={
              value?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
            }
            alt="profile"
            className="w-[45px] h-[45px] mr-3 rounded-full"
          />
          <div className="flex flex-col items-start justify-center">
            <p className="mb-1">
              {value?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
            <p>{value?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;

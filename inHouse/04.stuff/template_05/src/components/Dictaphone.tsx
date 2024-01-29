import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ClickedButtonPageSlice, DictaphoneSlice, store } from "../store/store";
import { getClickedSidebar } from "../store/reducers/getClickedSidebar";

const Dictaphone: React.FC = () => {
  const dispatch = useDispatch();
  const dictaphoneSelector = useSelector<any>(
    (state) => state.dictaphoneApp.mic
  );
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    alert("이 브라우저는 speech recognition을 지원하지 않습니다.");
  }
  if (transcript) {
    store.dispatch(
      getClickedSidebar(
        ClickedButtonPageSlice.actions.clickedSuccess(transcript)
      )
    )
    // transcript = undefined;
  }
  return (
    <>
      {dictaphoneSelector ? (
        <div className="absolute w-[450px] h-[20%] top-[10%] right-[5%] bg-slate-50  rounded-3xl shadow-2xl">
          <button
            onClick={() => {
              dispatch(DictaphoneSlice.actions.dictaphoneStart(false));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="absolute w-8 h-8 right-3 top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="my-5 text-center">
            {listening ? "" : "시작버튼을 누르고 말씀하세요!"}
          </p>
          <div className="w-[90%] h-[30%]">
            <h1 className="m-7 text-2xl">
              {transcript}
            </h1>
          </div>
          <div className="my-5 flex justify-center">
            <button
              className="p-2 hover:bg-indigo-700 hover:text-white rounded-3xl duration-75 text-xl"
              onClick={SpeechRecognition.startListening}
            >
              시작
            </button>
            <button
              className="mx-10 p-2 hover:bg-indigo-700 hover:text-white rounded-3xl duration-75 text-xl"
              onClick={SpeechRecognition.stopListening}
            >
              멈춤
            </button>
            <button
              onClick={resetTranscript}
              className="p-2 hover:bg-indigo-700 hover:text-white rounded-3xl duration-75 text-xl"
            >
              리셋
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Dictaphone;

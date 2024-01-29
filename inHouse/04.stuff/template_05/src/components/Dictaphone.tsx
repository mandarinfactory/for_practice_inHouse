import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone: React.FC = () => {
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
  return (
    <>
      {dictaphoneSelector ? (
        <div className="absolute w-[50%] h-[20%] top-[50%] right-[20%] bg-slate-50  rounded-3xl shadow-2xl">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="absolute w-6 h-6 right-2 top-2"
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
          <h1 className="m-7 text-2xl">{transcript}</h1>
          <div className="m-5 flex justify-center">
            <button className="mx-5" onClick={SpeechRecognition.startListening}>
              시작
            </button>
            <button className="mr-5" onClick={SpeechRecognition.stopListening}>
              멈춤
            </button>
            <button onClick={resetTranscript}>리셋</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Dictaphone;

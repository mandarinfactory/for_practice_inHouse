import { useState, useContext } from "react";
import { MovieInfoContextStore } from "../../../contexts/index";
import { authentication } from "../../../api/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PopupBox from "../../PopupBox";

export default function AuthComponent() {
  const MovieInfosCtx = useContext(MovieInfoContextStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    await signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        MovieInfosCtx.setIsLoginBtnClicked(false);
        MovieInfosCtx.setIsLoginClicked(true);
        MovieInfosCtx.setUserIdName(
          user.providerData[0].email
            .toString()
            .substring(0, user.providerData[0].email.toString().search("@"))
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        MovieInfosCtx.setIsSignUpClicked(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div className="absolute top-[30%] lg:w-[50%] md:w-[70%] sm:w-[70%] h-[40%] flex flex-row bg-white shadow-md z-10">
        <button
          onClick={() => {
            MovieInfosCtx.setIsLoginBtnClicked(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 384 512"
            className="absolute top-[10px] right-[10px]"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <div className="w-[45%] sm:hidden h-auto flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-red-400">
          <h1 className="p-2 my-7 text-3xl">무비써치</h1>
          <p className="lg:text-xl md:text-base lg:flex sm:hidden">
            항상 다채로운 영화찾기를 위해
          </p>
          <p className="lg:text-xl md:text-base lg:flex sm:hidden">
            노력하고 있습니다.
          </p>
          <p className="lg:text-xl md:text-base lg:flex sm:hidden">
            무비써치에 오신걸 환영합니다!
          </p>
        </div>
        <div className="m-auto flex flex-col items-center justify-center">
          <div className="my-10 flex flex-col items-center justify-center">
            <form>
              <input
                type="email"
                placeholder="이메일"
                onChange={(e) => setEmail(e.target.value)}
                className="mx-5 my-2 px-10 py-3 bg-slate-200 text-lg"
              />
            </form>
            <form>
              <input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
                className="mx-5 my-2 px-10 py-3 bg-slate-200 text-lg"
              />
            </form>
          </div>
          <div>
            <button onClick={handleSignIn} className="mx-5 text-lg">
              로그인
            </button>
            <button onClick={handleSignUp} className="mx-5 text-lg">
              회원가입
            </button>
          </div>
        </div>
      </div>
      {MovieInfosCtx.isSignUpClicked ? (
        <PopupBox
          onClick={() => {
            MovieInfosCtx.setIsSignUpClicked(false);
          }}
        >
          <p className="my-1 lg:text-lg sm:text-sm">
            축하합니다! 회원가입이 되셨습니다!
          </p>
          <p className="my-1 lg:text-lg sm:text-sm">
            이제 로그인 하시면 됩니다.
          </p>
          <p className="my-1 lg:text-lg sm:text-sm">
            {" "}
            무비써치에 가입해주셔서 감사합니다.
          </p>
        </PopupBox>
      ) : (
        <></>
      )}
    </>
  );
}

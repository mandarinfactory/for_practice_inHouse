import { useContext } from "react"
import { MovieInfoContextStore } from "../../../contexts"

export default function SignUpComponent () {
    const MovieInfosCtx = useContext(MovieInfoContextStore);

    return (
        <div className="absolute top-[35%] w-[30%] h-[15%] flex flex-col justify-center items-center bg-slate-100 z-20 shadow-2xl rounded-lg cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-red-400" onClick={() => {
            MovieInfosCtx.setIsSignUpClicked(false);
        }}>
            <p className="my-1 text-lg">축하합니다! 회원가입이 되셨습니다!</p>
            <p className="my-1 text-lg">이제 로그인 하시면 됩니다. 무비써치에 가입해주셔서 감사합니다.</p>
        </div>
    )
} 
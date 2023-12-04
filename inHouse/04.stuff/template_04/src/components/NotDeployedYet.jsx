export default function NotDeployedYet({ setNotDeployedYet }) {
  return (
    <div
      className="px-5 absolute top-[40%] lg:right-[39%] md:right-[30%] sm:right-[30%] lg:w-[30%] md:w-[40%] sm:w-[50%] h-[25%] bg-slate-300 shadow-xl rounded-2xl flex justify-center items-center cursor-pointer"
      onClick={() => {
        setNotDeployedYet(false);
      }}
    >
      <h1 className="lg:text-2xl md:text-xl sm:text-md">
        프로젝트 집순위는
        <br />
        현재 안드로이드 앱 심사중 입니다!
        <br />
        심사완료되는데로 빠른 업데이트
        <br />
        예정입니다!
      </h1>
    </div>
  );
}

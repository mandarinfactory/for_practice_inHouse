export default function NotUpdatedInfos({
  setNotUpdatedInfos,
}) {
  return (
    <div className="flex flex-col justify-center items-center absolute top-[20%] w-[35%] h-[30%] bg-white shadow-lg rounded-xl animate-fade animate-duration-200 cursor-pointer"
        onClick={() => setNotUpdatedInfos(false)}
    >
      <h1 className="text-3xl font-bold md:text-2xl sm:text-sm">아직 DB번호 설정이 되지 않아 업데이트가 되지 않았습니다.</h1>
      <h1 className="text-3xl font-bold md:text-2xl sm:text-sm">조속히 업데이트 할 예정입니다. 죄송합니다.</h1>
      <h2 className="text-2xl font-bold absolute bottom-10">무비써치</h2>
    </div>
  );
}

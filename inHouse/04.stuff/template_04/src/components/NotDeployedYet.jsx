export default function NotDeployedYet({ setNotDeployedYet }) {
  return (
    <div
      className="absolute top-[40%] right-[39%] w-[25%] h-[25%] bg-slate-300 shadow-xl rounded-2xl flex justify-center items-center cursor-pointer"
      onClick={() => {
        setNotDeployedYet(false);
      }}
    >
      <h1 className="text-3xl">
        프로젝트 집순위는
        <br />
        아직 베포 예정입니다!
      </h1>
    </div>
  );
}

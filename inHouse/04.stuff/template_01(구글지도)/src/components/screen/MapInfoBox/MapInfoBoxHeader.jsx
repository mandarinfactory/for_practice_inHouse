export default function MapInfoBoxHeader({type, setType}) {

  return (
    <div className="py-5 shadow-md">
      <h4 className="m-5 text-2xl font-bold">주변 음식점, 호텔 & 명소들</h4>
      <div className="flex">
        <form className="mx-5 my-3 flex flex-row">
          <span className="px-1 text-lg font-semibold">종류</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-1 shadow-xl bg-slate-100"
          >
            <option value="restaurants">음식점</option>
            <option value="hotels">호텔</option>
            <option value="attractions">명소들</option>
          </select>
        </form>
      </div>
    </div>
  );
};

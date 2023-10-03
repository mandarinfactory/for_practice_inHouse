export default function NoDataInfoBox() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-auto h-auto mb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50em"
          viewBox="0 0 320 512"
          className="w-20 h-20 fill-white p-2 bg-slate-400 rounded-full"
        >
          <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
        </svg>
      </div>
      <div className="w-auto h-auto flex flex-col justify-center items-center">
        <h1 className="my-3 text-slate-400 text-2xl">
          위 버튼을 눌러 원하는 곳을 찾아보세요!
        </h1>
        <h1 className="my-3 text-slate-400 text-2xl">
          늘 동네지도는 여러분의 궁금한 장소를
        </h1>
        <h1 className="my-3 text-slate-400 text-2xl">
          알아내기 위해 노력하고 있습니다!
        </h1>
      </div>
    </section>
  );
}

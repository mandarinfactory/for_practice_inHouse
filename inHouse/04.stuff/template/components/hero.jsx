export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen felx-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
              일관성 있는 <br />
              배움의 자세를 통해 <br />
              성장하는 개발자 이호준이라고 합니다. <br />
            </h1>
            <p className="mb-8 leading-relaxed font-semibold text-lg">
              하늘같이 높고 넓은 사람이 되라는 이름처럼 <br />
              항상 깊고 많은 호기심을 갖고 개발하고 있습니다. <br />
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                프로젝트 보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
    </>
  );
}

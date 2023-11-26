export default function AboutMe() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font dark:bg-slate-800 dark:text-gray-300">
      <div className="container lg:w-[70%] md:w-full sm:w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <p className="sm:text-2xl text-xl mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              몇번이고 벽을 만나 부딪힌 적도, 힘든적도 많지만, 직접 코딩을 통해
            </p>
            <p className="sm:text-2xl text-xl mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              나오는 결과에 성취감을 느끼고 새로운것을 배움에 있어 즐거움이 늘
            </p>
            <p className="sm:text-2xl text-xl mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              생깁니다. 깃헙에 주중 한 커밋 하는 습관을 꾸준하게 유지하며,
            </p>
            <p className="sm:text-2xl text-xl mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              늘 안주하지 않기 위해 노력하고 있습니다.
            </p>
          </div>
          <div>
            <p className="mt-10 mb-1.5 lg:text-lg md:text-lg">
              23년 3월까지 웹퍼블리셔 교육으로 마크업언어(HTML, CSS) <br />
              그리고 기본적인 바닐라JS, jQuery를 배웠으며
            </p>
            <p className="mb-1.5 lg:text-lg md:text-lg">
              교육을 끝마치고 JavaScript 라이브러리인 <br />
              React JS와 React Native를 독학으로 공부했습니다.
            </p>
            <p className="mb-1.5 lg:text-lg md:text-lg">
              또한, 기본적인 바닐라JS교육을 바탕으로 JavaScript ES6을
              공부했습니다.
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full h-full md:w-1/2 w-5/6">
          <img src="../../public/pic/profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

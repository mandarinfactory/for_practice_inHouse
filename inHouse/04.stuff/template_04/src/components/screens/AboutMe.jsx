export default function AboutMe() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font dark:bg-slate-800 dark:text-gray-300">
      <div className="container lg:w-full md:w-full sm:w-full mx-auto flex py-24 lg:flex-row md:flex-row sm:flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start md:items-start lg:text-left md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="lg:text-2xl md:text-2xl sm:text-3xl mb-5 font-medium text-indigo-600 dark:text-fuchsia-600 drop-shadow-lg">반갑습니다. 호기심많은 프론트엔드 개발자 이호준입니다.</h1>
          <div>
            <p className="lg:text-xl md:text-xl sm:text-md mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              몇번이고 벽을 만나 부딪힌 적도, 힘든적도 많지만, 직접 코딩으로
            </p>
            <p className="lg:text-xl md:text-xl sm:text-md mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              나오는 결과에 성취감을 느끼고 새로운것을 배움에 있어 즐거움이 늘 생깁니다.
            </p>
            <p className="lg:text-xl md:text-xl sm:text-md mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              깃헙에 주중 한 커밋 하는 습관을 꾸준하게 유지하며,
            </p>
            <p className="lg:text-xl md:text-xl sm:text-md mb-1.5 font-medium text-gray-900 dark:text-gray-100">
              늘 안주하지 않기 위해 노력하고 있습니다.
            </p>
          </div>
          <div>
            <p className="mt-10 mb-1.5 lg:text-lg md:text-lg sm:text-md">
              23년 3월까지 웹퍼블리셔 교육으로 마크업언어(HTML, CSS, SCSS) <br />
              그리고 기본적인 바닐라JS, jQuery를 배웠으며
            </p>
            <p className="mb-1.5 lg:text-lg md:text-lg sm:text-md">
              교육을 끝마치고 JavaScript 라이브러리인 <br />
              React JS와 React Native를 독학으로 공부했습니다.
            </p>
            <p className="mb-1.5 lg:text-lg md:text-lg sm:text-md">
              또한, 기본적인 바닐라JS교육을 바탕으로 JavaScript ES6을
              공부했습니다.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="my-5 text-2xl">연락처 및 이력서</h1>
            <div className="w-full h-auto flex">
              <a href="tel:+8201098370037" title="휴대전화">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 384 512"
                  className="mr-10 fill-gray-600 dark:fill-gray-300 hover:fill-black dark:hover:fill-gray-100 cursor-pointer duration-100"
                >
                  <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </a>
              <a href="mailto:hoojunee@gmail.com" title="이메일">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 512 512"
                  className="mr-10 fill-gray-600 dark:fill-gray-300 hover:fill-black dark:hover:fill-gray-100 cursor-pointer duration-100"
                  >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </a>
              <a href="../../file/이력서.pdf" download title="이력서">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 384 512"
                  className="fill-gray-600 dark:fill-gray-300 hover:fill-black dark:hover:fill-gray-100 cursor-pointer duration-100"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full h-full md:w-1/2 w-5/6">
          <img src="../../pic/profile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 text-gray-600 body-font dark:bg-slate-900 dark:text-gray-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to={"./"}>
            <span className="ml-3 text-xl text-black dark:text-gray-100">이호준의 포트폴리오</span>
          </Link>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-gray-500 dark:text-gray-300">
            깃헙 홈페이지
            <a
              href="https://github.com/mandarinfactory"
              className="ml-1 text-gray-500 dark:text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              - mandarinfactory
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

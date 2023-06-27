import { useState } from "react";
import Link from "next/link";
import DarkModeToggleButton from "./darkmode_toggle";
import ContactMenu from "./contact";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const contactMenuHandler = () => {
    setCount((prevCount) => prevCount + 1);
    if (count % 2 === 0) {
      setMenuIsOpen(true);
    } else setMenuIsOpen(false);
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link legacyBehavior href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-fuchsia-700 hover:bg-indigo-700 rounded-full duration-200"
                viewBox="0 0 640 512"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
              <span className="ml-3 text-2xl font-extrabold">
                이호준의 포트폴리오
              </span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href="/">
              <a className="mr-5 anchor">홈</a>
            </Link>
            <Link legacyBehavior href="/about_me">
              <a className="mr-5 anchor">About Me</a>
            </Link>
            <Link legacyBehavior href="projects">
              <a className="mr-5 anchor">프로젝트</a>
            </Link>
            <button
              className="userCount mr-5 anchor dark:text-slate-400"
              onClick={contactMenuHandler}
            >
              연락하기
              {menuIsOpen && <ContactMenu setMenuIsOpen={setMenuIsOpen} />}
            </button>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}

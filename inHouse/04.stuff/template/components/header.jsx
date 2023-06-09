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
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-fuchsia-700 hover:bg-indigo-700 rounded-full duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
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

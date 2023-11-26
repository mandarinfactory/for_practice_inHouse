import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link
        className="mr-9 text-xl hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer duration-100"
        to={"/aboutme"}
      >
        자기소개
      </Link>
      <Link
        className="lg:mr-9 md:mr-9 sm:mr-0 text-xl hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer duration-100"
        to={"/projects"}
      >
        프로젝트
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link
        className="mr-9 text-xl hover:text-gray-900 cursor-pointer duration-100"
        to={"/aboutme"}
      >
        자기소개
      </Link>
      <Link
        className="mr-9 text-xl hover:text-gray-900 cursor-pointer duration-100"
        to={"/projects"}
      >
        프로젝트
      </Link>
      <Link
        className="mr-9 text-xl hover:text-gray-900 cursor-pointer duration-100"
        to={"/contact"}
      >
        연락처
      </Link>
    </div>
  );
}

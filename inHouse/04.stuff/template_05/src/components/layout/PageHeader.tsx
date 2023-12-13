import { Menu } from "lucide-react";
import logo from "../../assets/logo.jpg";

const PageHeader = () => {
  return (
    <div className="flex lg:gap-20 gap-10 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button>
          <Menu />
        </button>
        <a href="/">
          <img className="h-[50px]" src={logo} alt="" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PageHeader;

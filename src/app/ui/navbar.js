import Link from "next/link";
import NameIcon from "./nameIcon";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <NameIcon />
      <Link
        href="/contact"
        className="rounded-[20px] p-[8px] border-[2px] [border-color:#6e06f2] hover:bg-[#6e06f2] hover:text-white text-[#6e06f2] w-[120px] text-center"
      >
        Say Hello
      </Link>
    </div>
  );
};

export default NavBar;

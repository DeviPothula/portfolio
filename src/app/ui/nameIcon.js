import Link from "next/link";

const NameIcon = () => {
  return (
    <Link href={"/"}>
      <p
        className="text-[30px] font-[500] text-[#6e06f2]"
        style={{ fontFamily: "logoFont" }}
      >
        DEVI
      </p>
    </Link>
  );
};

export default NameIcon;

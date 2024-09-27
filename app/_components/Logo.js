import logo from "@/public/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <span className="text-2xl font-semibold text-primary-100 ">Hotelo.</span>
    </a>
  );
}

export default Logo;

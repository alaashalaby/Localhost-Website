import { navbarList } from "@/constants";
import Link from "next/link";
const ResponsiveMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div
      className={`absolute top-20 left-0 w-full bg-white z-20 transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-accentColor py-8 m-4 rounded-xl">
        <ul className="flex flex-col items-center justify-center gap-5">
          {navbarList.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="font-semibold text-white text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

import { navbarList } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ResponsiveMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{ duration: 0.5 , ease: "easeInOut" }}
          className="absolute top-20 left-0 w-full  bg-white z-20"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

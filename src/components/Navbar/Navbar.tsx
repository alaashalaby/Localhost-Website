"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Container from "@/utils/Container";
import Link from "next/link";
import { navbarList } from "@/constants";
import { Button } from "../ui/button";
import { MenuIcon, User2Icon, X } from "lucide-react";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="w-full py-5 bg-white border-b-[1px] border-b-[#E8ECF2] sticky top-0 z-50">
        <Container className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="logo website"
              priority={true}
              className="w-32"
            />
          </Link>
          <div className="hidden md:inline-flex">
            <ul className="flex items-center gap-8">
              {navbarList.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="font-semibold text-blackColor text-lg hover:text-accentColor duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button asChild variant="link" className="p-0">
              <Link href="/login">
                <User2Icon className="text-accentColor me-3" />
              </Link>
            </Button>
            <Button
              variant="link"
              className="p-0 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <X className="text-accentColor" />
              ) : (
                <MenuIcon className="text-accentColor" />
              )}
            </Button>
          </div>
        </Container>
      </nav>
      <ResponsiveMenu isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;

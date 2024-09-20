"use client";
import React from "react";
import Link from "next/link";
import { routes } from "./routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gray-900 p-2 flex justify-center items-center">
      {routes.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`text-white text-lg px-4 py-2 transition-colors duration-300 ${
            pathname === item.href ? "border-b-2 border-blue-500" : ""
          } hover:text-gray-400`}
        >
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;

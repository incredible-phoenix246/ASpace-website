"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/utils";
import useWindowHeight from "@/hooks/useDimension";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";

const Navbar = () => {
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const pathname = usePathname();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);
  return (
    <nav
      className={cn(
        " max-[500px]:py-2   px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-brand-white/90 py-2 border-b border-gray-200 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-white/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px]",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </Link>
      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={
              link.link === "home"
                ? "/?path=home"
                : `${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full   flex justify-center capitalize text-base relative font-medium",
              isActive === link.link ? "text-brand-main" : "text-brand-blue"
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">
        <button type="button">
          <Link
            href={`/sign-in?callbackUrl=${pathname}`}
            className="text-brand-blue"
          >
            Login
          </Link>
        </button>
      </div>
    </nav>
  );
};

export { Navbar };

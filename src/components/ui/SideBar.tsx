"use client";
import React from "react";
import { sidebarLinks } from "../../../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-2 p-6 pt-28 text-white max-sm:hidden rounded-tr-4xl rounded-br-4xl lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`) 
          return (
            <Link
              href={link.route}
              key={link.name}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image src={link.imgUrl} alt={link.name} width={24} height={24} />
                <p className="text-md font-semibold max-lg:hidden">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;

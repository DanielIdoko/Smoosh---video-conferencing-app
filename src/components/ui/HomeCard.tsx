import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";


interface HomeCardProps{
    img: string,
    title: string,
    className: string,
    desc: string,
    handleClick: () => void
}

const HomeCard = ({img, title, desc, handleClick, className}: HomeCardProps) => {
  return (
    <div
        className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-xl cursor-pointer', className)}
        onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt="meeting icon"
          width={20}
          height={20}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-md font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCard;

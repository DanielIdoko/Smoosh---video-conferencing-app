import { icons } from "lucide-react";
import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex-center h-screen w-full bg-dark-1">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading Spinner"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Spinner;

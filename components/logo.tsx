import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/circular-std-medium-500.ttf",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/progress.svg"} alt="LOGO" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Progress
        </p>
      </div>
    </Link>
  );
};

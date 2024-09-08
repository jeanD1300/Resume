import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import React from "react";
import ProfileImage from "../public/images/resume/Profile2.jpg";
import Image from 'next/image';
import { Container } from "./container";
import Link from "next/link";

export function Header() {
  return (
    <Container className="mt-5 mb-10">
      <nav className="relative flex justify-between items-center">
        <div>
          <Link href="https://github.com/jeanD1300">
            <Image
              src={ProfileImage}
              alt="Napat"
              width={55}
              height={55}
              className="w-12 h-12 rounded-full ring-2 ring-zinc-400 dark:ring-zinc-400/40"
            /> 
          </Link>
        </div>
        <div className="pointer-events-auto">
          <ThemeSwitcher />
        </div>
      </nav>
    </Container>
  );
}

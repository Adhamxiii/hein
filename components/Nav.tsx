"use client";

import React, { useEffect, useState } from "react";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCategories } from "@/lib/actions";

const noto = Noto_Sans({ subsets: ["latin"] });

const Nav = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  const handleLinkClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="mx-auto flex max-w-7xl justify-between px-5 py-8">
      <div className="flex items-center">
        <Link
          href="/"
          className={`${noto.className} text-6xl font-bold uppercase tracking-tighter text-slate-800`}
        >
          Hein
        </Link>
      </div>
      <div className="hidden items-center gap-5 text-lg lg:flex">
        <Link href="/info">Info</Link>
        <Link href="mailto:adhamxiii22@yahoo.com">Contact</Link>
      </div>

      <Sheet open={isOpen}>
        <SheetTrigger asChild>
          <button className="lg:hidden" onClick={() => setIsOpen(true)}>
            Menu
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className={`${noto.className} text-6xl font-bold uppercase tracking-tighter text-slate-800`}
                onClick={handleLinkClick}
              >
                Hein
              </Link>
            </SheetTitle>
            <SheetDescription>
              {categories.map((link: any, i: number) => (
                <Link
                  href={`/category/${link}`}
                  className="mt-4 flex flex-col gap-4"
                  key={i}
                  onClick={handleLinkClick}
                >
                  <span className="text-lg font-bold capitalize text-black">
                    {link}
                  </span>
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategories } from "../lib/actions";
import ShoppingCartModal from "./ShoppingCartModal";

const footerLinks = [
  { name: "Furniture", href: "/furniture" },
  { name: "Lighting", href: "/lighting" },
  { name: "Index", href: "/index" },
  { name: "Shop", href: "/shop" },
];

const Footer = () => {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.split("/")[2]);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  return (
    <div className="fixed bottom-0 flex w-screen items-center justify-between border-t border-t-black bg-white px-10 py-3">
      <div className="flex gap-2">
        <nav className="hidden gap-5 lg:flex">
          {categories &&
            categories.map((category: string, i: number) => (
              <Link href={`/category/${category}`} key={i}>
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    id="id"
                    name="name"
                    className="hidden"
                    aria-label="Radio button"
                  />
                  <span
                    className="inline-flex size-5 items-center justify-center rounded-full border border-black text-opacity-0"
                    title="Radio button"
                  >
                    <span
                      className={`inline-block size-3 rounded-full ${
                        category === decodedPathname && "bg-black"
                      }`}
                    ></span>
                  </span>
                  <span className="text-sm capitalize text-black">
                    {category}
                  </span>
                </label>
              </Link>
            ))}
        </nav>
        <ShoppingCartModal />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-black p-1 text-sm outline-none focus:ring-0 max-lg:w-20"
          aria-label="Search input"
        />
      </div>
    </div>
  );
};

export default Footer;

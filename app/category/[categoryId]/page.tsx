"use client";

import ProductCard from "@/components/ProductCard";
import { getCategoryProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const collections = [
  {
    category: "Electronics",
    text: [
      "“The Nexus Series” electronics collection presents new inspiration from our exploration of innovative technology hubs, like Silicon Valley in California and the Tech City in Shoreditch, London.",
      "At Silicon Valley, we were introduced to cutting-edge semiconductor technologies, full of advanced processing capabilities, efficient power consumption, and miniaturized components. That technology, combined with the creative and entrepreneurial spirit of Tech City, particularly influenced the sleek, user-friendly, and high-performance designs for our smartphones.",
      "Other aspects of the collection, such as our laptops and tablets, show an evolution of our established interest in integrating advanced technology with user-centered design principles. For example, we combined high-resolution displays, robust processors, and ergonomic designs for our laptops and tablets.",
      "This collection is deeply personal, sharing the innovations and the experiences of the world immediately around us.",
    ],
  },
  {
    category: "Jewelery",
    text: [
      "“The Eternal Grace” jewelry collection presents new inspiration from our exploration of renowned cultural landmarks, like the Louvre Museum in Paris and the Great Wall of China.",
      "At the Louvre Museum, we were introduced to an exquisite array of historical artifacts, full of intricate designs, precious metals, and gemstones. That craftsmanship, combined with the majestic and timeless appeal of the Great Wall of China, particularly influenced the elegant, sophisticated, and culturally rich designs for our necklaces.",
      "Other aspects of the collection, such as our bracelets and rings, show an evolution of our established interest in blending traditional techniques with contemporary aesthetics. For example, we combined a mix of gold, silver, and diamonds for our bracelets and rings.",
      "This collection is deeply personal, sharing the beauty and the stories of the world immediately around us.",
    ],
  },
  {
    category: "Men's Clothing",
    text: [
      "“The Urban Voyager” men's clothing collection presents new inspiration from our exploration of vibrant cityscapes, like Manhattan in New York City and Shibuya in Tokyo.",
      "In Manhattan, we were introduced to the dynamic energy of street fashion, full of contemporary designs, versatile fabrics, and urban functionality. That style, combined with the cutting-edge and eclectic fashion scene of Shibuya, particularly influenced the modern, bold, and stylish visuals for our jackets.",
      "Other aspects of the collection, such as our shirts and trousers, show an evolution of our established interest in combining high-quality materials with innovative design techniques. For example, we combined a mix of cotton, wool, and synthetic blends for our shirts and trousers.",
      "This collection is deeply personal, sharing the inspirations and the experiences of the world immediately around us.",
    ],
  },
  {
    category: "Women's Clothing",
    text: [
      "“The Serene Elegance” women's clothing collection presents new inspiration from our exploration of iconic fashion capitals, like Paris and Milan.",
      "In Paris, we were introduced to timeless couture, full of delicate fabrics, intricate embroidery, and classic silhouettes. That elegance, combined with the bold and innovative designs from Milan, particularly influenced the chic, sophisticated, and contemporary visuals for our dresses.",
      "Other aspects of the collection, such as our blouses and skirts, show an evolution of our established interest in merging traditional craftsmanship with modern aesthetics. For example, we combined a mix of silk, lace, and sustainable fabrics for our blouses and skirts.",
      "This collection is deeply personal, sharing the beauty and the stories of the world immediately around us.",
    ],
  },
];

const CategoryDetails = ({ params }: { params: { categoryId: string } }) => {
  const [category, setCategory] = useState<any>();

  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.split("/")[2]);

  const currentCategory = collections.find(
    (c) => c.category.toLowerCase() === decodedPathname.toLowerCase(),
  );

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await getCategoryProducts(params.categoryId);
      setCategory(res);
      console.log(res);
    };
    fetchCategory();
  }, [params.categoryId]);

  if (!category) return <div>Loading...</div>;
  return (
    <div className="mx-10 grid h-[calc(100vh-194px)] grid-cols-4 gap-3 overflow-hidden max-lg:mx-4 max-lg:mb-16 max-lg:h-auto max-lg:grid-cols-1 max-lg:place-items-center">
      <div className="col-span-1 hidden overflow-y-auto border-r-[1px] border-black pr-5 lg:block">
        {currentCategory && (
          <div className="">
            <h3 className="mb-3 text-base font-normal">
              {currentCategory.category}
            </h3>
            <div className="flex flex-col gap-4">
              {currentCategory.text.map((paragraph, index) => (
                <p key={index} className="text-sm leading-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="col-span-3 mx-2 overflow-y-auto overflow-x-hidden max-lg:overflow-scroll">
        <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {category &&
            category.map((product: any, i: number) => (
              <ProductCard key={i} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;

"use client";

import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res);
      console.log(res);
    };
    fetchProducts();
  }, []);

  return (
    <Marquee
      pauseOnHover
      autoFill
      speed={80}
      className="container mx-auto h-[calc(100vh-180px)] flex w-full items-center justify-center gap-4 overflow-x-hidden"
    >
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </Marquee>
  );
}

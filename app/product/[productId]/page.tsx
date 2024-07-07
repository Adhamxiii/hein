"use client";

import { getProductById, getProducts } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<any>();
  const [products, setProducts] = useState<any[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const {
    addItem,
    handleCartClick,
    incrementItem,
    decrementItem,
    setItemQuantity,
  } = useShoppingCart();

  const pathname = usePathname();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(params.productId);
      setProduct(res);
      console.log(res);
    };
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res);
      console.log(res);
    };
    fetchProduct();
    fetchProducts();
  }, [params.productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="mx-10 grid h-[calc(100vh-194px)] grid-cols-4 overflow-hidden max-lg:flex max-lg:h-auto max-lg:mb-16 max-lg:flex-col max-lg:overflow-scroll">
      {products && (
        <div className="hidden grid-cols-3 gap-3 overflow-y-auto border-r-2 border-black lg:grid">
          {products.map((product, i) => (
            <Link
              href={`${product.id}`}
              key={i}
              className={`${product.id == pathname.split("/")[2] && "border border-black"} p-2`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={86}
                height={86}
                className={`size-20 object-contain`}
              />
            </Link>
          ))}
        </div>
      )}
      <div className="relative col-span-2 mx-4 h-full overflow-y-auto border-r-2 border-black px-5 max-lg:border-0">
        {product && (
          <Image
            src={product.image}
            alt={product.title}
            width={2000}
            height={2000}
            className="h-auto w-full"
          />
        )}
      </div>
      <div className="mb-4 overflow-y-auto overflow-x-hidden px-5">
        <h3 className="mb-3 text-base">{product.title}</h3>
        <div className="flex w-full flex-col gap-5">
          <p className="">{product.category}</p>
          <p className="w-full text-pretty">{product.description}</p>
          <p>${product.price}</p>
          <div className="flex items-center justify-between">
            <p>rate: {product.rating.rate}</p>
            <p>count: {product.rating.count}</p>
          </div>
        </div>
        <hr className="mt-2 h-0.5 bg-black" />

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex h-[35px] w-1/2 flex-1 items-stretch justify-stretch border border-black">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((prev) => prev - 1);
                  setItemQuantity(product.id, quantity - 1);
                }
              }}
              className="flex flex-1 items-center justify-center border border-r-black text-center text-base"
            >
              -
            </button>
            <input
              type="text"
              className="w-1/3 text-center focus:outline-none"
              value={quantity}
              onChange={(e) =>
                setItemQuantity(product.id, Number(e.target.value))
              }
            />
            <button
              onClick={() => {
                quantity < product.rating.count &&
                  setQuantity((prev) => prev + 1);
                setItemQuantity(product.id, quantity + 1);
              }}
              className="flex-1 border border-l-black text-center text-base"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addItem(product, { count: quantity });
              handleCartClick();
            }}
            className="w-1/2 border border-black px-4 py-3 text-center text-xs uppercase leading-[11px]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

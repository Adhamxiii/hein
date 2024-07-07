"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    incrementItem,
    decrementItem,
    redirectToCheckout,
    setItemQuantity,
  } = useShoppingCart();

  const [quantity, setQuantity] = useState<number>(0);

  const handleCheckoutClick = async (e: any) => {
    e.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetTrigger>Cart({cartCount})</SheetTrigger>
      <SheetContent className="flex h-full flex-col justify-between">
        <SheetHeader className="overflow-hidden">
          <SheetTitle>Shopping cart</SheetTitle>
          <SheetDescription className="overflow-y-auto">
            {!Object.values(cartDetails ?? {}) ||
              (Object.values(cartDetails ?? {}).length === 0 && (
                <div className="flex h-[calc(100vh-240px)] flex-col items-center justify-center text-gray-500">
                  <ShoppingBag />
                  <p>Your cart is empty</p>
                </div>
              ))}

            {Object.values(cartDetails ?? {}).map((item: any, i) => (
              <div key={i} className="mt-3 flex items-start gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="w-60 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <h2 className="p-3 text-base font-bold text-black">
                      {item.title}
                    </h2>
                    <p
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer py-3 text-xs text-black underline hover:text-gray-500"
                    >
                      Remove
                    </p>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="flex w-3/5 rounded-lg border border-black text-black">
                      <button
                        onClick={() => decrementItem(item.id)}
                        className="flex flex-1 items-center justify-center border-r-[1px] border-black text-center text-base"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="w-1/3 text-center focus:outline-none"
                        value={item.quantity}
                        onChange={(e) =>
                          setItemQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                      <button
                        onClick={() => incrementItem(item.id)}
                        className="flex-1 border-l-[1px] border-black text-center text-base"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-black">${item.price}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </SheetDescription>
        </SheetHeader>
        <div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p className="text-xl leading-8">Subtotal:</p>
              <p className="text-2xl font-bold">${totalPrice?.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <button
                className="w-full rounded-lg border bg-black py-4 text-center text-white hover:border-black hover:bg-white hover:text-black"
                onClick={handleCheckoutClick}
              >
                Begin Checkout
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;

import Image from "next/image";
import Link from "next/link";

import { DM_Mono } from "next/font/google";

const dm = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="mx-3 flex w-full flex-col items-start justify-start gap-2"
    >
      <Image
        src={product.image}
        alt=""
        width={360}
        height={360}
        className="size-96 object-cover shadow-md"
      />
      <h3 className={`${dm.className} text-wrap text-xs uppercase`}>
        {product.title}
      </h3>
    </Link>
  );
};

export default ProductCard;

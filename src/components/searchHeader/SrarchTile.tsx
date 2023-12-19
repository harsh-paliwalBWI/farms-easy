import { currency } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

function SearchTile(props: any) {
  return (
    <Link
      href={`/product/${encodeURIComponent(props.product?.slug)}`}
      onClick={() => {
        props.setSearchQuery("");
      }}
    >
      <div className=" bg-slate-100 flex gap-2" key={props.product?.id}>
        <div className="w-[100px]">
          <Image
            src={props.product?.images[props.product?.coverImage]?.url}
            alt={props.product?.name}
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 py-2 justify-center flex-1">
          <p>{props.product?.name}</p>
          <p className="text-sm text-gray-500">
            By: {props.product?.vendor?.name}
          </p>
          <p className="text-sm font-semibold">
            {currency}
            {props.product?.variants[0]?.price?.discounted}
            &nbsp;
            <span className="text-xs text-gray-500 line-through">
              {currency}
              {props.product?.variants[0]?.price?.mrp}
            </span>
          </p>
        </div>
        {/* <div className="flex flex-col justify-center gap-2">
        <button className="px-2 py-1 bg-primary">Buy now</button>
        </div> */}
      </div>
    </Link>
  );
}

export default SearchTile;

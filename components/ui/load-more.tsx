"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/ui/spinner";
import { getDummyProducts } from "@/app/dummy/seed/page";
import { Product } from "@/types";
import ProductCard  from "@/components/shop/ProductCard";

export function LoadMore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreProducts = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(2000);
    const nextPage = (page % 7) + 1;
    const newProducts = (await getDummyProducts(nextPage)) ?? [];
    setProducts((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
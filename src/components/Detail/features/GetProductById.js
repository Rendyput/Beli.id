import { useState, useEffect } from "react";
import { axiosInstance, routes } from "@/src/lib/axios";
import { useRouter } from "next/router";

export const GetProductById = () => {
  const [product, setProduct] = useState({});
  const [isInvalid, setIsInvalid] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const getProductById = async () => {
    const products = await axiosInstance.get(routes.getProductById(id));
    const product = products;

    if (product === "Product not found") return setIsInvalid(true);
    return console.log(product.data.result[0]);
  };

  useEffect(() => {
    if (id) getProductById();
  }, [id]);

  return {
    data: product,
    isInvalid
  };
};

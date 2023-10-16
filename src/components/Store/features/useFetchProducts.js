import { useState, useEffect } from "react";
import { routes, axiosInstance } from "@/src/lib/axios"

export const UseFetchProducts = () => {
    const [products, setProducts] = useState([]);
    
    const fetchAllProducts = async () => {
      try {
        const productResponse = await axiosInstance.get(routes.getProducts());
        setProducts(productResponse.data.result);

      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      fetchAllProducts();
    }, []);

    return {
      data: products
    }
};

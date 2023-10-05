import { useEffect, useState } from "react";
import axiosInstance from "@/src/lib/axios";
import {
  Container,
  ProductBox,
  ProductCol,
  ProductDetail,
  ProductDetailDesc,
  ProductDetailPrice,
  ProductDetailTitle,
  ProductImage,
  ProductImageWrapper,
  ProductList,
  ProductListWrapper,
  ProductWrapper,
} from "./styled";

const Store = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const productResponse = await axiosInstance.get("/products?limit=20");
      setProductsList(productResponse.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Container>
        <ProductWrapper>
          <ProductListWrapper>
            <ProductList>
              {productsList?.map((product, index) => {
                return (
                  <>
                    <ProductCol key={index}>
                      <ProductBox key={product.id}>
                        <ProductImageWrapper>
                          <ProductImage src={product.images[0]} />
                        </ProductImageWrapper>
                        <ProductDetail>
                          <ProductDetailTitle>
                            {product.title}
                          </ProductDetailTitle>
                          <ProductDetailPrice>
                            {product.price}$
                          </ProductDetailPrice>
                          <ProductDetailDesc>
                            {product.description}
                          </ProductDetailDesc>
                        </ProductDetail>
                      </ProductBox>
                    </ProductCol>
                  </>
                );
              })}
            </ProductList>
          </ProductListWrapper>
        </ProductWrapper>
      </Container>
    </>
  );
};

export default Store;

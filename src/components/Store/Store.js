import Link from "next/link";
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
import { UseFetchProducts } from "./features/useFetchProducts";

const Store = () => {
  const { data } = UseFetchProducts();

  return (
    <>
      <Container>
        <ProductWrapper>
          <ProductListWrapper>
            <ProductList>
              {data?.map((product, index) => {
                return (
                  <ProductCol key={index}>
                    <Link href={`/store/${product.id}`}>
                      <ProductBox>
                        <ProductImageWrapper>
                          <ProductImage src={product.thumbnail} />
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
                    </Link>
                  </ProductCol>
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

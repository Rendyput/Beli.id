import {
  Container,
  ImageWrapper,
  Wrapper,
  WrapperHero,
  ImageHero,
  TitleWrapper,
  Title,
  DetailProduct,
  BrandWrapper,
  Brand,
  DetailProductWrapper,
  Price,
  Stock,
  CartButton,
  ButtonWrapper,
  Description,
  DescriptionWrapper,
  TitleDescription,
  TitleDetail,
  TitleDetailDesc,
  PriceWrapper,
  StockWrapper,
  Mark,
  MarkBrand,
  MarkPrice,
  MarkStock,
} from "./styled";
import { GetProductById } from "./features/GetProductById";

const Detail = () => {
  const { data, isInvalid } = GetProductById();

  return (
    <>
      <Container>
        <Wrapper>
          {isInvalid ? (
            <>Product not found</>
          ) : (
            <>
              <WrapperHero>
                <ImageWrapper>
                  <ImageHero src={data?.thumbnail} />
                </ImageWrapper>
                <TitleWrapper>
                  <Title>{data?.title}</Title>
                </TitleWrapper>
                <DetailProductWrapper>
                  <DetailProduct>
                    <BrandWrapper>
                      <TitleDetail>Brand</TitleDetail>
                      <MarkBrand>:</MarkBrand>
                      <Brand>{data?.brand}</Brand>
                    </BrandWrapper>
                    <PriceWrapper>
                      <TitleDetail>Price</TitleDetail>
                      <MarkPrice>:</MarkPrice>
                      <Price>{data?.price} $</Price>
                    </PriceWrapper>
                    <StockWrapper>
                      <TitleDetail>Stock</TitleDetail>
                      <MarkStock>:</MarkStock>
                      <Stock>{data?.stock}</Stock>
                    </StockWrapper>
                  </DetailProduct>
                  <DescriptionWrapper>
                    <Description>
                      <TitleDetailDesc>Description : </TitleDetailDesc>
                      {data?.description}
                    </Description>
                  </DescriptionWrapper>
                </DetailProductWrapper>
                <ButtonWrapper>
                  <CartButton>Add to cart</CartButton>
                </ButtonWrapper>
              </WrapperHero>
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Detail;

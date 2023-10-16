
import {
  Container,
  ImageWrapper,
  Wrapper,
  WrapperHero,
  ImageHero,
  TitleWrapper,
  Title,
} from "./styled";
import { GetProductById } from "./features/GetProductById"


const Detail = () => {
  const { data, isInvalid } = GetProductById()

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
              </WrapperHero>
            </>
          )}
          ;
        </Wrapper>
      </Container>
    </>
  );
};

export default Detail;

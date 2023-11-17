import Link from "next/link";
import Image from "next/image";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  ExploreButton,
  HeaderContent,
  HeaderImage,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <HeaderContent>
              <HeaderImage src="./assets/hero.png" />
            </HeaderContent>
            <HeaderContent>
              <Title>Mari Berbelanja!</Title>
              <SubTitle>
                Beli.id adalah E-Commerce yang dapat memberikan pengalaman
                terbaik untuk jual beli bagi pelanggan.
              </SubTitle>
            </HeaderContent>
          </ContentWrapper>
          <ButtonWrapper>
            <Link href="/store" passHref>
              <ExploreButton>Explore Now!</ExploreButton>
            </Link>
          </ButtonWrapper>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </>
  );
};

export default LandingPage;

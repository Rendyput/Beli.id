import Link from "next/link";
import Image from "next/image";
import {
  Container,
  ContentWrapper,
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
           <HeaderImage src="./assets/hero.png"/>
          </HeaderContent>
          <HeaderContent>
            <Title>Cari barang-barang yang kamu inginkan di Go Shop</Title>
            <SubTitle>
              Go Shop adalah E-Commerce yang dapat memberikan pengalaman
              terbaik untuk jual beli bagi pelanggan.
            </SubTitle>
          </HeaderContent>
        </ContentWrapper>
      </Wrapper>
    </Container>
    </>
  );
};

export default LandingPage;

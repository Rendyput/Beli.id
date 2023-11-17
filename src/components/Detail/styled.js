import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  background: #bbc8de;

  @media (max-width: 992px) {
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperHero = styled.div`
  box-sizing: border-box;
  border-radius: 24px;

  @media (max-width: 992px) {
    margin: 12px;
    padding: 20px 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  box-sizing: border-box;
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

  @media (max-width: 992px) {
    max-width: 80%;
    max-height: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  `;

export const ImageHero = styled.img`
  width: 50%;
  max-height: 360px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 14px;
  }
`;

export const TitleWrapper = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;

@media (max-width: 992px) {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

export const Title = styled.h3`
  font-size: 24px;

  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

export const DetailProductWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid #001F3D;
  margin: 40px;
  border-radius: 10px;
`;

export const DetailProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  letter-spacing: 2px;
`;

export const TitleDetail = styled.p`
  font-size: 18px;
  `
  
  export const TitleDetailDesc = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: black;
  `;
  
  export const MarkStock = styled.p`
  margin-left: 40px;
  display: flex;
`
  export const MarkBrand = styled.p`
  margin-left: 38px;
  display: flex;
`
  export const MarkPrice = styled.p`
  margin-left: 44px;
  display: flex;
`

export const BrandWrapper = styled.div`
  display: flex;
`

export const Brand = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #595E60;
  margin-left: 4px;
  `;
  
  export const PriceWrapper = styled.div`
  display: flex;
  margin-right:px;
  `
  
  export const Price = styled.p`
  margin-left: 4px;
  font-weight: 600;
  font-size: 18px;
  color: #595E60;
  padding-bottom: 2px;
  padding-top: 2px;
`;

export const StockWrapper = styled.div`
  display: flex;
  `
  
  export const Stock = styled.p`
  margin-left: 4px;
  font-weight: 600;
  font-size: 18px;
  color: #595E60;
`;

export const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: gray;
  letter-spacing: 1px;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartButton = styled.button`
  box-sizing: border-box;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  background: orange;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    background: #bed1df;
  }
`;

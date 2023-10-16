import styled from "styled-components";

export const PaddingSpacing = "1.5em";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #BBC8DE;
`;

export const ProductWrapper = styled.div`
  padding-top: 40px;
  padding-left: calc(${PaddingSpacing}) / 2;
  padding-right: calc(${PaddingSpacing}) / 2;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 992px) {
    display: flex;
    columns: 20;
    grid-row: 6;
  }
  `;

export const ProductListWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  
@media (min-width: 576px) AND (max-width: 992px) {
  width: 100%;
}
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;

  @media (max-width: 992px) {
    max-width: 100%;
  }

`;

export const ProductCol = styled.div`
  max-width: 100%;
  width: 100%;
  flex: 0 0 auto;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 25%;
  }

  @media (min-width: 768px) AND (max-width: 991px) {
    flex: 0 0 auto;
    width: 25%;
  }

  @media (min-width: 576px) AND (max-width: 575px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const ProductBox = styled.div`
  max-width: 300px;
  height: 375px;
  background: #fff;
  border: 1px solid #e2eef1;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0 17px 13px 0 rgba(25, 44, 75, 0.0196078431372549);
  margin: 10px;
  margin-bottom: 30px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    height: 280px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;

  @media (max-width: 992px) {
    width: 65%;
    height: 70%;
  }
`;

export const ProductImage = styled.img`
  width: 75%;
  max-width: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) scale(1);
  -moz-transform: translate(-50%, -50%) scale(1);
  -o-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);

  @media (max-width: 992px) {
    top: 50%;
    left: 50%;
  }
`;

export const ProductDetail = styled.div`
  padding: 14px 0;

`;

export const ProductDetailTitle = styled.h3`
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
  
  @media (max-width: 992px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  `;

export const ProductDetailDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 4px;
  font-weight: 400;
  letter-spacing: 2px;
  color: slategray;
  `;

export const ProductDetailPrice = styled.h2`
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 600;
  padding-top: 6px;
  display: flex;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: black;
  `;

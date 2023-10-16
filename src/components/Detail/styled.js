import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

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

  @media (max-width: 992px) {
    max-width: 80%;
    max-height: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImageHero = styled.img`
  width: 100%;
  max-height: 360px;
  z-index: -1;

  @media (max-width: 992px) {
    border-radius: 14px;
  }
`;

export const TitleWrapper = styled.div`
  box-sizing: border-box;

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

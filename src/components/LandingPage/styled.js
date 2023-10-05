import styled from "styled-components";

export const Container = styled.div`
    display: block;
    box-sizing: border-box;
    position: relative;
    background: #BBC8DE;
    overflow: hidden;

    &:before {
    content: "";
    position: absolute;
    right: 0;
    width: 310px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    box-sizing: border-box;

    @media (max-width: 1400px) {
      width: 285px;
    }

    @media (max-width: 992px) {
      width: 500px;
    }

    @media (max-width: 635px) {
      width: 350px;
    }
  }

`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 768px) {
    max-width: 800px !important;
  }
    `

export const ContentWrapper = styled.div`
    display: flex;
    padding: 0 40px;
    flex-direction: row;

    @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
    `

export const HeaderContent = styled.section`
    flex-direction: column;
    display: flex;
    padding-left: 30px;
    padding-top: 30px;

    @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
    }
`

export const HeaderImage = styled.img`
    width: 85%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    user-select: none;
    padding-top: 20px;

    @media (max-width: 1270px) {
    width: 100%;
    padding-left: 0;
  }
  
`

export const Title = styled.h1`
    font-size: 3em;
    line-height: 1.4em;
    color: #E66912;
    letter-spacing: 4px;
    font-family: sans-serif;
    margin-top: 160px;
    font-weight: 550;
    user-select: none;

    @media (max-width: 992px) {
        letter-spacing: 2px;
        line-height: 1em;
        margin-top: 30px;
    }
    `

export const SubTitle = styled.p`
    font-size: 1.4em;
    line-height: 1.3em;
    letter-spacing: 1px;
    font-weight: 300;
    color: #595E60;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;

    @media (max-width: 992px) {
        letter-spacing: 0.5px;
    }
`

export const ButtonWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin-top: 40px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const ExploreButton = styled.button`
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
        background: #BED1DF;
    }
`

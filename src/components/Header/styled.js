import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    background: #fff;
    box-sizing: border-box;
    z-index: 1;
    border: solid 1px gray;
    `
    
export const Wrapper = styled.div`
    display: flex;
    width: 100%
    margin: 40px;
`

export const Title = styled.h1`
    font-weight: 700;
    font-family: Roboto, Sans-serif;
    letter-spacing: 6px;
    line-height: 1.2em;
    margin: 21px;
    color: tomato;
    transition: 0.3;

    &:hover{
        color: orange;
    }
`

export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 1.2em;
    line-height: 1.1em;
    letter-spacing: 1px;
    diplay: flex;
    color: black;
    padding: 34px 20px;
    transition: 0.3;

    &:hover{
        color: orange;
    }
`
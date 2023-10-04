import styled from "styled-components";

export const Container = styled.div`
    display: block;
    box-sizing: border-box;
    position: relative;
    background: #BBC8DE;
    overflow: hidden;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin-left: 20px;
    margin-right: 20px;
    `

export const ContentWrapper = styled.div`
    display: flex;
    padding: 0 40px;
    flex-direction: row;
    `

export const HeaderContent = styled.section`
    flex-direction: column;
    display: flex;
    padding-left: 60px;
    padding-top: 60px;
`

export const HeaderImage = styled.img`
    width: 90%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    user-select: none;
    padding-top: 80px;
`

export const Title = styled.h1`
    font-size: 3em;
    line-height: 1.4em;
    color: #E66912;
    letter-spacing: 4px;
    font-family: sans-serif;
    padding-top: 80px;
    font-weight: 550;
    user-select: none;

    `

export const SubTitle = styled.p`
    font-size: 1.4em;
    line-height: 1.3em;
    font-weight: 300;
    color: #595E60;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 20px;
`
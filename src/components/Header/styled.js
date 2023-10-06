import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  background: #001F3D;
  border-bottom: 1px solid #BBC8DE;
  width: 100%;
  white-space: nowrap;
  height: 80px;
  transition: 0.2s;
  z-index: 999;

  @media (max-width: 992px) {
    height: ${(props) => (props?.height === "true" ? "80px" : "220px")};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0px 80px;
 
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    max-width: 1250px;
  }

  @media (max-width: 992px) {
    max-width: 800px;
    padding: 0 50px;
  }
  
  @media (max-width: 768px) {
    max-width: 800px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: 992px) {
    align-items: start;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  letter-spacing: 6px;
  line-height: 1.2em;
  transition: 0.3;
  padding-top: 2px;
  color: #BED1DF;
  
  &:hover {
    color: #E66912;
  }

  @media (max-width: 992px) {
    margin-top: -8px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 5px;
  margin-left: 30px;

  @media (max-width: 992px) {
    margin-left: 0;
    flex-direction: column;
    margin-top: 25px;
  }
`;

export const MenuList = styled.div`
  display: flex;
  margin-left: 40px;

  @media (max-width: 992px) {
    box-sizing: border-box;
    margin-top: 20px;
    display: block;
    margin-left: 2px;
  }
`

export const MenuItem = styled.li`
  list-style: none;
  letter-spacing: 2px;
  font-size: 20px;
  color: #BED1DF;
  margin: 12px 10px 0px 40px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 500;
  
  &:hover {
    color: #E66912;
  }
  
  @media (max-width: 992px) {
    margin-top: 20px;
    margin-left: 8px;
  }
  `;

export const MenuBurger = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    cursor: pointer;
    color: #BED1DF;
    right: 0;
    top: 1.6em;
    
    &:hover {
      color: #E66912;
    }
  }
`;

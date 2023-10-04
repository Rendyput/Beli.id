import React from 'react';
import {
  Footer,
  Wrapper,
  MenuWrapper,
  Menu,
  Title,
  SubTitle,
  Item,
  Copyright
} 
from "./styled" 
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <div>
          <Link href="#">
           <Title>GOSHOP</Title>
          </Link>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}. GO Team
          </Copyright>
        </div>
        <MenuWrapper>
          <Menu>
            <SubTitle>Go-Shop</SubTitle>
            <Link href="#">
              <Item>Store</Item>
            </Link>
            <Link href="#">
              <Item>About</Item>
            </Link>
          </Menu>
          <Menu>
            <SubTitle>Contact</SubTitle>
            <Link href="#">
             <Item>Instagram</Item>
            </Link>
            <Link href="#">
             <Item>Twitter</Item>
            </Link>
            <Link href="#">
             <Item>Facebook</Item>
            </Link>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </Footer>
  )
}

export default FooterComponent
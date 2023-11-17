import Link from "next/link";
import { FaGripLines } from "react-icons/fa";
import {
  Container,
  Wrapper,
  Title,
  MenuBurger,
  Menu,
  HeaderWrapper,
  MenuItem,
  MenuList,
} from "./styled";
import { useState } from "react";

const Header = () => {
  const [isShrinkHeader, setIsShrinkHeader] = useState(true);

  const toggleShrinkHeader = () => {
    setIsShrinkHeader((state) => !state);
  };

  return (
    <HeaderWrapper height={`${isShrinkHeader}`}>
      <Container>
        <Wrapper>
          <Menu>
            <Link href="/" passHref>
              <Title>Beli.id</Title>
            </Link>
            <MenuList>
              <Link href="/store" passHref>
                <MenuItem>Store</MenuItem>
              </Link>
              <Link href="/about" passHref>
                <MenuItem>About</MenuItem>
              </Link>
            </MenuList>
            <MenuBurger>
              <FaGripLines size={28} onClick={toggleShrinkHeader} />
            </MenuBurger>
          </Menu>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

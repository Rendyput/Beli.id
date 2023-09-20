import Link from "next/link"
import {
  Container,
  Wrapper,
  SubTitle,
  Title,
} from "./styled"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Title>MideShop</Title>
        </Link>
        <Link href="/Store">
          <SubTitle>Store</SubTitle>
        </Link>
        <Link href="/About">
          <SubTitle>About</SubTitle>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header
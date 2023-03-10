import { Container, LogoImg } from "./styles";

import logoImgRef from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <LogoImg source={logoImgRef} />
    </Container>
  );
};

export default Header;

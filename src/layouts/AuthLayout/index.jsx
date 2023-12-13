import { Outlet } from "react-router-dom";

import { Container } from "./styles";
import brandImg from "../../assets/Brand.png";

export const AuthLayout = () => {
  return (
    <Container>
      <img src={brandImg} alt="Logo Food Explorer" />
      <Outlet />
    </Container>
  );
};

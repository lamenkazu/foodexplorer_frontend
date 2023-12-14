import React from "react";
import { Link } from "react-router-dom";

import { Container, Recipe, Count, Menu } from "./styles";
import { IoMenu } from "react-icons/io5";
import brandImg from "../../assets/Brand.png";
import { PiReceiptLight } from "react-icons/pi";

export const Header = () => {
  return (
    <Container>
      <Menu>
        <IoMenu size={24} />
      </Menu>
      <Link to="/">
        <img src={brandImg} alt="Logo Food Explorer" />
      </Link>
      <Recipe>
        <PiReceiptLight size={24} />
        <Count>
          <p>1</p>
        </Count>
      </Recipe>
    </Container>
  );
};

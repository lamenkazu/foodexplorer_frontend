import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Recipe,
  Count,
  Menu,
  SideBar,
  Title,
  Content,
  SideBarItem,
  Search,
  SignOut,
  StyledButton,
  StyledLink,
  Empty,
} from "./styles";

import { Button } from "../Button";

import brandImg from "../../assets/Brand.png";
import { IoMenu } from "react-icons/io5";
import { PiReceiptLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { USER_ROLE } from "./../../utils/roles";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => setSideBar(!sideBar);

  const handleSignOut = () => {
    if (confirm("Quer mesmo sair?")) {
      signOut();
      navigate("/");
    }
  };

  return (
    <Container>
      {sideBar && (
        <SideBar>
          <Title>
            <IoCloseOutline onClick={handleSideBar} />
            <h3>Menu</h3>
          </Title>

          <Content>
            <Search>
              <PiMagnifyingGlassThin />
              <input type="text" name="" id="" />
            </Search>
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <SideBarItem>Novo prato</SideBarItem>
            )}
            <SideBarItem onClick={handleSignOut}>Sair</SideBarItem>
          </Content>
        </SideBar>
      )}

      <Menu>
        <IoMenu onClick={handleSideBar} />
      </Menu>

      <StyledLink to="/">
        <img src={brandImg} alt="Logo Food Explorer" />
        <p>admin</p>
      </StyledLink>

      <Search id="search">
        <PiMagnifyingGlassThin />
        <input type="text" name="" id="" />
      </Search>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <Recipe>
          <PiReceiptLight />
          <Count>
            <p>Pedidos (1)</p>
            <p>1</p>
          </Count>
        </Recipe>
      ) : (
        <Empty />
      )}

      <StyledButton title="Novo produto" />

      <SignOut>
        <GoSignOut onClick={handleSignOut} />
      </SignOut>
    </Container>
  );
};

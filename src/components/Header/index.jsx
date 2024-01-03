import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Btn,
  StyledLink,
  Empty,
  TextButton,
} from "./styles";

import brandImg from "../../assets/Brand.png";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { PiReceiptLight, PiMagnifyingGlassThin } from "react-icons/pi";
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

  const handleNewDish = () => {
    navigate("/new");
    setSideBar(false);
  };

  const handleFavoriteList = () => {
    navigate("/favorites");
    setSideBar(false);
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
              <SideBarItem onClick={handleNewDish}>Novo prato</SideBarItem>
            )}
            {[USER_ROLE.CUSTOMER].includes(user.role) && (
              <SideBarItem onClick={handleFavoriteList}>
                Meus Favoritos
              </SideBarItem>
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
        {[USER_ROLE.ADMIN].includes(user.role) && <p>admin</p>}
      </StyledLink>

      <Search id="search">
        <PiMagnifyingGlassThin />
        <input type="text" name="" id="" />
      </Search>

      {![USER_ROLE.ADMIN].includes(user.role) ? (
        <>
          <TextButton onClick={handleFavoriteList}>Meus Favoritos</TextButton>

          <StyledButton icon={PiReceiptLight} title="Pedidos (1)" />
          <Recipe>
            <PiReceiptLight />
            <Count>
              <p>1</p>
            </Count>
          </Recipe>
        </>
      ) : (
        <>
          <Btn onClick={handleNewDish}>Novo prato</Btn>
          <Empty />
        </>
      )}

      <SignOut>
        <GoSignOut onClick={handleSignOut} />
      </SignOut>
    </Container>
  );
};

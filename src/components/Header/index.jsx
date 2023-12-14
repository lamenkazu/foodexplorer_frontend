import { useState } from "react";
import { Link } from "react-router-dom";

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
} from "./styles";
import { IoMenu } from "react-icons/io5";
import brandImg from "../../assets/Brand.png";
import { PiReceiptLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { PiMagnifyingGlassThin } from "react-icons/pi";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => setSideBar(!sideBar);

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
            <SideBarItem>Sair</SideBarItem>
          </Content>
        </SideBar>
      )}

      <Menu onClick={handleSideBar}>
        <IoMenu />
      </Menu>
      <Link to="/">
        <img src={brandImg} alt="Logo Food Explorer" />
      </Link>
      <Recipe>
        <PiReceiptLight />
        <Count>
          <p>1</p>
        </Count>
      </Recipe>
    </Container>
  );
};

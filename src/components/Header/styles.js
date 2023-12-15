import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.DARK_700};

  padding: 6.4rem 2.8rem 3.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > a {
    img {
      height: 2.4rem;
    }
  }
`;

export const Menu = styled.button`
  border: 0;
  background: none;

  > svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const Recipe = styled.button`
  border: 0;
  background: none;
  > svg {
    font-size: 2.5rem;
  }
`;

export const Count = styled.div`
  width: 12px;
  height: 12px;

  background-color: rgba(219, 0, 0, 0.79);
  border-radius: 50%;
  position: relative;
  top: -3.2rem;
  right: -1.2rem;

  > p {
    font-size: 0.81rem;
    font-weight: 500;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  height: calc(100vh - 7.7rem);
  top: 0;
  left: 0;
  padding: 6.4rem 2.8rem 3.2rem;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.DARK_700};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  width: 100vw;

  > h3 {
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > svg {
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  background-color: ${({ theme }) => theme.DARK_400};
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 11.4rem;
  width: 100vw;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-top: 3.6rem;
  margin-inline: 2.8rem;

  padding: 1.2rem 1.4rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.DARK_700};

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.LIGHT_400};
  }

  > input {
    width: 100%;
    border: 0;
    margin-right: 2.8rem;
    background: none;
  }
`;

export const SideBarItem = styled.div`
  margin-top: 3.6rem;
  margin-inline: 2.8rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.DARK_1000};

  cursor: pointer;
`;

import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.DARK_700};

  padding: 6.4rem 2.8rem 3.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.2rem;

  > a {
    img {
      height: 2.4rem;
    }
  }

  #search {
    margin-top: -1.4rem;
    background-color: ${({ theme }) => theme.DARK_900};
    width: 100%;
    height: 4rem;
    margin-inline: 0;

    > input {
      width: 100%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: end;
    padding-inline: 12.3rem;
  }
`;

export const Empty = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;

    margin-top: -1.4rem;

    height: max-content;
    max-width: 20.2rem;
    padding: 0.35rem 3.2rem;
    > p {
      width: max-content;
    }

    > svg {
      font-size: 3.2rem;
    }
  }
`;

export const Btn = styled.button`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    border: none;
    background-color: ${({ theme }) => theme.TOMATO};
    border-radius: 0.8rem;

    margin-top: 3.4rem;

    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 20.2rem;
    height: 4rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 0.8rem;
  align-items: flex-end;
  > p {
    color: ${({ theme }) => theme.BLUE_200};
    font-size: 1.2rem;
    line-height: 160%; /* 19.2px */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    gap: 0;

    > img {
      width: 19.7rem;
      min-height: 3rem;
    }
  }
`;

export const Menu = styled.button`
  border: 0;
  background: none;

  > svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const Recipe = styled.button`
  border: 0;
  background: none;
  > svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
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

export const SignOut = styled.div`
  display: none;

  > svg {
    font-size: 2.4rem;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
`;

export const TextButton = styled.button`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
    border: none;
    background: none;
    white-space: nowrap;
    padding: 1rem 0;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    font-family: Roboto;
  }
`;

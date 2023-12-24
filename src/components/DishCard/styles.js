import styled from "styled-components";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 19rem;
  align-items: center;
  gap: 1.2rem;

  border-radius: 0.8rem;

  padding: 1.6rem 2.4rem 2.4rem;

  background-color: ${({ theme }) => theme.DARK_300};

  > svg {
    position: relative;
    align-self: flex-end;
    font-size: 2.6rem;
    cursor: pointer;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-between;

    min-width: 30rem;
    max-width: 30rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

export const Empty = styled.div`
  display: none;
`;

export const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  color: ${({ theme }) => theme.LIGHT_300};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
  }
`;

export const P = styled.h2`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    color: ${({ theme }) => theme.LIGHT_400};

    min-width: 60%;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.BLUE_200};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 3.2rem;
    line-height: 160%;
  }
`;

export const Cover = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
`;

export const StyledButton = styled(Button)`
  height: 3rem;
  padding: 1.2rem 2.4rem;
`;

export const CustomerOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    display: grid;
    gap: 0;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4.8rem;

    > button {
      height: 100%;
    }
  }
`;

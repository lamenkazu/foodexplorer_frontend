import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "./../../styles/deviceBreakpoints";

export const Container = styled.main`
  padding: 5rem 3.4rem;
  color: ${({ theme }) => theme.LIGHT_300};

  > h1 {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
    margin-bottom: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-inline: 12.3rem;
  }
`;

export const FavComponentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FavComponent = styled.div``;

import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 3rem 2.6rem;

  > img {
    height: 1.4rem;
    margin-right: 1rem;
    filter: grayscale(100%);
  }

  > p {
    font-family: "DM Sans", sans-serif;
    font-size: 1.2rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    align-items: center;
    padding-inline: 12.3rem;
  }
`;

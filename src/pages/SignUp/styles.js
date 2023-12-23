import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.form`
  grid-area: content;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 7.3rem;

  > h1 {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.DARK_700};
    text-align: center;
    padding: 6.4rem;
  }
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 1.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    text-align: left;
    width: 28.8rem;
  }
`;

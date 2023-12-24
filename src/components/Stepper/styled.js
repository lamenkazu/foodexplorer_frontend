import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > p {
    color: ${({ theme }) => theme.LIGHT_300};

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2rem;
    }
  }

  > svg {
    color: ${({ theme }) => theme.LIGHT_100};
    cursor: pointer;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }
  }
`;

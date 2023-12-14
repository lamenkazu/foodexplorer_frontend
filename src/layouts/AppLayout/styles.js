import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: min(100%, ${DEVICE_BREAKPOINTS.MD});
  min-width: ${DEVICE_BREAKPOINTS.SM};
  height: 100dvh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 11.4rem auto 7.7rem;

  margin: 0 auto;

  grid-template-areas:
    "header"
    "content"
    "footer";
`;

import styled from "styled-components";
import { Button } from "../../components/Button";
import { GoBack } from "../../components/GoBack";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
  grid-area: content;
  padding: 1.6rem 5.6rem 3.2rem;

  margin-inline: auto;
  text-align: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-inline: 6.4rem;

    > section {
      display: flex;
      align-items: center;
      gap: 4.6rem;
      text-align: left;
    }
  }
`;

export const StyledGoBack = styled(GoBack)`
  font-size: 2.4rem;
`;

export const Cover = styled.img`
  width: 26.4rem;
  height: 26.4rem;
  border-radius: 50%;

  margin: 1.6rem 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 4.2rem;
    width: 39rem;
    height: 39rem;
  }
`;

export const ContentDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  > h1 {
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 37.858px */

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 4rem;
    }
  }

  > p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.715px */

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }
  }
`;

export const IngredientTags = styled.section`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;

  padding-inline: 4.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-inline: 0;
  }
`;

export const CustomerOrder = styled.section`
  display: flex;
  align-items: center;

  > div {
    width: 100%;
    justify-content: center;

    > p {
      font-size: 2.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 3.2rem;

    > div {
      width: max-content;

      > p {
        font-size: 2.6rem;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 0;
  height: 3.8rem;
  padding: 1.2rem 2.4rem;

  > p {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 16.225px; /* 171.429% */
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 21rem;
    padding: 2.4rem;

    > svg {
      font-size: 3.2rem;
    }
    > p {
      text-align: center;

      font-size: 1.4rem;
      font-style: normal;
      line-height: 24px; /* 171.429% */
    }
  }
`;

import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
  grid-area: content;
  padding-top: 4.4rem;

  @media (min-width: 405px) {
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: center;
    padding-inline: 12.3rem;
    padding-top: 17.2rem;
  }
`;

export const HeaderMain = styled.section`
  display: flex;
  margin-bottom: 6.2rem;
  img {
    position: absolute;
    top: 18.5rem;

    @media (min-width: 371px) {
      top: 16.8rem;
    }

    @media (min-width: 405px) {
      top: 12.5rem;
    }

    @media (min-width: 573px) {
      top: 10.8rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      top: 12.8rem;
      left: 9rem;
      height: 41.2rem;
    }
  }
`;

export const HeaderCard = styled.div`
  border-radius: 2.917px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  margin-right: 1.6rem;
  margin-left: 3.6rem;
  width: 100%;

  padding: 3.6rem 0.8rem 2.2rem 15.3rem;

  color: ${({ theme }) => theme.LIGHT_300};

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  > p {
    font-size: 1.2rem;
    line-height: 140%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h2 {
      margin-top: -3rem;
      font-size: 4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 26rem;

    padding-left: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h2 {
      margin-top: -3rem;
      font-size: 4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  padding-top: 4.4rem;
`;

export const HeaderMain = styled.section`
  display: flex;
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
  }
`;

export const HeaderCard = styled.div`
  border-radius: 2.917px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  margin-right: 1.6rem;
  margin-left: 3.6rem;
  width: 100%;

  padding: 3.6rem 0.8rem 2.2rem 15.3rem;
  h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  p {
    font-size: 1.2rem;
    line-height: 140%;
  }
`;

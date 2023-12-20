import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.main`
  grid-area: content;
  padding: 1.6rem 5.6rem 3.2rem;

  margin-inline: auto;
  text-align: center;
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    color: ${({ theme }) => theme.LIGHT_300};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
  }
`;

export const Cover = styled.img`
  width: 26.4rem;
  height: 26.4rem;
  border-radius: 50%;

  margin: 1.6rem 0;
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
`;

export const IngredientTags = styled.section`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;

  padding-inline: 4.4rem;
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
  }

  > p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.715px */
  }
`;

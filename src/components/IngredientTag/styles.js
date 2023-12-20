import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.DARK_1000};
  max-width: fit-content;

  padding: 0.4rem 0.8rem;

  border-radius: 0.5rem;

  > p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

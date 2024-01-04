import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const Cover = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  flex-shrink: 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  }

  > button {
    border: none;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */

    color: ${({ theme }) => theme.TOMATO_DISABLE};
  }
`;

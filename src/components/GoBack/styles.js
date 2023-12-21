import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > p {
    color: ${({ theme }) => theme.LIGHT_300};
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 33.6px */
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > p {
    color: ${({ theme }) => theme.LIGHT_300};
  }

  > svg {
    color: ${({ theme }) => theme.LIGHT_100};
    cursor: pointer;
  }
`;

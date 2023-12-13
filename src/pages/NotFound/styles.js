import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${({ theme }) => theme.LIGHT_400};

  > a {
    color: ${({ theme }) => theme.BLUE_200};
    margin-top: 24px;
  }
`;

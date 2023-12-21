import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  display: inline-block;
  background: transparent;
  color: ${({ theme }) => theme.LIGHT_100};
  border: none;

  width: 10rem;

  &::placeholder {
    color: ${({ theme }) => theme.LIGHT_500};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: end;
  width: max-content;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.LIGHT_600};

  color: ${({ theme }) => theme.LIGHT_100};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.LIGHT_500}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > input,
  > p {
    height: 3.2rem;
    padding: 0.3rem 1.2rem;
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.LIGHT_100};
  }
`;

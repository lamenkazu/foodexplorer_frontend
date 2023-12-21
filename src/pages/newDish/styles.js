import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  padding: 1rem 3.2rem 5.2rem;
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  input {
    background-color: ${({ theme }) => theme.DARK_800};
  }
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.DARK_900};
  padding: 1.3rem 1.6rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.LIGHT_400};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    color: ${({ theme }) => theme.LIGHT_400};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;

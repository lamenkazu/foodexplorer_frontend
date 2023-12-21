import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  padding: 1rem 3.2rem 5.2rem;
`;

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    input {
      background-color: ${({ theme }) => theme.DARK_800};
    }
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

  width: 100%;

  > option {
    min-width: 10rem;
  }
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

export const MarkerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  border-radius: 0.8rem;

  > label {
    color: ${({ theme }) => theme.LIGHT_400};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    border-radius: 0.8rem;

    padding: 0.8rem;
    background-color: ${({ theme }) => theme.DARK_800};
  }
`;

export const TextareaWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > textarea {
    background-color: ${({ theme }) => theme.DARK_800};
    border: none;
    resize: none;
    border-radius: 0.8rem;
    padding: 1.4rem;

    height: 17.2rem;
  }
`;

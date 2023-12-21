import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  padding: 1rem 3.2rem 5.2rem;
`;

export const InputFileWrapper = styled.section`
  display: flex;
  flex-direction: column;

  > label:first-child {
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.LIGHT_400};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }

  > label:last-child {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    background-color: ${({ theme }) => theme.DARK_800};

    padding: 1.2rem 3.2rem;
    border-radius: 0.8rem;

    cursor: pointer;

    input {
      display: none;
    }

    label {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
    }
  }
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

  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_54)'%3E%3Cpath d='M8 10L16 18L24 10' stroke='%239C98A6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_54'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 1.6rem top 60%;

  > option {
    min-width: 10rem;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

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
  gap: 0.8rem;

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
  gap: 0.8rem;

  > textarea {
    background-color: ${({ theme }) => theme.DARK_800};
    border: none;
    resize: none;
    border-radius: 0.8rem;
    padding: 1.4rem;

    height: 17.2rem;
  }
`;

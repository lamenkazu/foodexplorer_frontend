import styled from "styled-components";

export const Container = styled.select`
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

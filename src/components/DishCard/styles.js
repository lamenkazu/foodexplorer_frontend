import styled from "styled-components";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.4rem;
  align-items: center;
  gap: 1.2rem;

  border-radius: 0.8rem;

  padding: 1.6rem 2.4rem 2.4rem;

  background-color: ${({ theme }) => theme.DARK_300};

  > svg {
    position: absolute;
    align-self: flex-end;
    font-size: 2.6rem;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

export const Empty = styled.div`
  display: none;
`;

export const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  color: ${({ theme }) => theme.LIGHT_300};
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: ${({ theme }) => theme.BLUE_200};
`;

export const Cover = styled.img`
  margin-top: 3rem;

  width: 8.8rem;
  height: 8.8rem;
  border-radius: 50%;
`;

export const StyledButton = styled(Button)`
  height: 3rem;
  padding: 1.2rem 2.4rem;
`;

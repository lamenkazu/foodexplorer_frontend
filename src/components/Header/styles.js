import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.DARK_700};

  padding: 6.4rem 2.8rem 3.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > a {
    img {
      height: 2.4rem;
    }
  }
`;

export const Menu = styled.button`
  border: 0;
  background: none;
`;

export const Recipe = styled.button`
  border: 0;
  background: none;
`;

export const Count = styled.div`
  width: 12px;
  height: 12px;

  background-color: rgba(219, 0, 0, 0.79);
  border-radius: 50%;
  position: relative;
  top: -3.2rem;
  right: -1.2rem;

  p {
    font-size: 0.81rem;
    font-weight: 500;
  }
`;

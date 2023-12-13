import styled from "styled-components";

export const Container = styled.div`
  max-width: max-content;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;

  margin: 15.8rem auto;

  grid-template-areas:
    "title"
    "content";

  > img {
    grid-area: title;
    width: 27.8rem;
    height: 4.4rem;
  }
`;

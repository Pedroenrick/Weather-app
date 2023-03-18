import styled from "styled-components";
import background from "../../assets/background.png";

export const StyledContainer = styled.main`
  background: url(${background}) no-repeat center/cover;
  min-height: 100vh;

  display: grid;
  place-content: center;
  gap: 2.4rem;
  padding: 6.4rem;

  @media (min-width: 1200px) {
    grid-template-columns: 48rem 27.7rem 27.7rem;
    grid-template-rows: 24.4rem 21.2rem;
  }
`;

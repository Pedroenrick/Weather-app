import styled from "styled-components";
import background from "../../assets/background.png";

export const StyledContainer = styled.main`
  background: url(${background}) no-repeat center/cover;
  min-height: 100vh;

  display: grid;
  place-content: center;
`;

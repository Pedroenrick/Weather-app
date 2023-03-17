import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  section {
    background-color: ${({ theme }) => theme.colors.background};
    backdrop-filter: blur(1rem);

    border-radius: 1rem;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f8f9fa;
  }
  main {
    padding-top: 70px; /* Adjust according to your navbar height */
  }

  h2 {
    text-align: center;
    margin-top: 20px;
  }
`;

export default GlobalStyles;

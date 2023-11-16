import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html {
    font-size: 10px; 
}

body {
    background-color: ${({ theme: { colors } }) => colors.purple600};
    color: ${({ theme: { colors } }) => colors.purple100};
    font-family: ${({ theme: { font } }) => font}
}
`;

export default GlobalStyle;

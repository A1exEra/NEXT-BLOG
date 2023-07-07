import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Open+Sans:wght@400;700&display=swap');  *,
*,
body,
html {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.grey500};
    color: #252525;
    font-family: 'Roboto', sans-serif;
  }
  body {
  font-family: 'Open Sans', 'Lato', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Oswald', 'Roboto', sans-serif;
}

h4,
h5,
h6 {
  font-family: 'Lato', sans-serif;
}
a {
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}
`;

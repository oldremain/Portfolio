import { createGlobalStyle } from "styled-components";
import { theme } from "@/styles/Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  background-color: ${theme.colors.bg};
  color: ${theme.colors.primary};
  min-width: 360px;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
  font-size: inherit;
  font-weight: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
}
`;

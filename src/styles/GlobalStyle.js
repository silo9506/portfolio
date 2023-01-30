import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
  --color-dark-grey: #363636;
  --color-grey: #616161;
  --color-light-grey: #838383;
  --color-orange: #feb546;
  --color-yellow: #fdcc11;
  --color-blue: #175cbe;
  --color-light-pink: hsl(321, 63%, 90%);
 //
  --parallax-offset: 30vh;
  --content-offset: 40vh;
  --transition-speed: 1.2s;
  --slide-number: 3;
  
}
*{
  box-sizing: border-box;
}
a{
  color:unset;
  text-decoration: unset;
}
`;

export default GlobalStyle;

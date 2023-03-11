import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
  --parallax-offset: 30vh;
  --content-offset: 40vh;
  --transition-speed: 1.2s;
  --slide-number: 3;
}
html{
  font-size:24px;

  @media screen and (max-width: 1300px) {
    font-size:20px;
    }
    @media screen and (max-width: 700px) {
      font-size:13px;
      }
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

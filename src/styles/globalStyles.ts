import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 // font-family: 'Anton', sans-serif;
 // font-family: 'Noto Sans KR', sans-serif;
  ${reset}
  :root {
    * {
        box-sizing : border-box;
        /* background-color: #f7f7f7; */
      }
  
  }

  `;

export default GlobalStyles;

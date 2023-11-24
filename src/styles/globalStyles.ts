import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 // font-family: 'Anton', sans-serif;
 // font-family: 'Noto Sans KR', sans-serif;
  ${reset}
  :root {
    * {
        box-sizing : border-box;
        /* Color */
        --color-black: #333;
        --color-white: #fff;
        --color-dark-gray: #555;
        --color-gray: #777;
      }
      .left-box {
        width: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .right-box {
        width: 60%;
      }
  
  }

  `;

export default GlobalStyles;

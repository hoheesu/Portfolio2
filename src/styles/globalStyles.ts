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
        --color-blue: #1261d6;
      }
      button{
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
      .container{
        display: flex;
        align-items: center;
        height: 85vh;
        position: relative;
      }
      .title {
        position: absolute;
        top: 1rem; left: 50%;
        transform: translateX(-50%);
        font-size: 2rem;
        color: var(--color-black);
        display: flex; align-items: center;
        gap: 0.5rem;
        font-weight: 300;
        svg{
          color: var(--color-blue);
        }
      }
  
  }

  `;

export default GlobalStyles;

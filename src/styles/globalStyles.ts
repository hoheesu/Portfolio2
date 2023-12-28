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
        --color-light-gray: #ccc;
        --color-blue: #1261d6;
        --color-main: cadetblue
      }
      body { 
        background-color: var(--color-main);
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
        color: var(--color-white);
        display: flex; align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        svg{
          color: var(--color-white);
        }
      }
  
  }

  `;

export default GlobalStyles;

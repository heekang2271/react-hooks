import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        overflow-y: auto;
        word-break: keep-all;
        word-wrap: break-word;
        position: relative;
    }
    body, button, input, select, td, textarea, th, a {
        font-family: 'Noto Sans KR', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15px;
        color: #000;
        line-height: 1.5;
    }
    a {
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        color: inherit;
    }
    .inner {
        width: 100%;
        margin: 0 auto;
        max-width: 1280px;
        padding: 0 20px;
    }
`;

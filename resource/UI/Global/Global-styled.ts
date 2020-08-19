import { createGlobalStyle } from 'styled-components';

import MonotypeCorsivaWoffFont from 'Media/Font/Monotype Corsiva.woff';
import MonotypeCorsivaWoff2Font from 'Media/Font/Monotype Corsiva.woff2';
import TahomaWoffFont from 'Media/Font/Tahoma.woff';
import TahomaWoff2Font from 'Media/Font/Tahoma.woff2';

export const GlobalStyle = createGlobalStyle
`
    @font-face {
        font-family: 'Monotype Corsiva';
        src: url('${ MonotypeCorsivaWoffFont }') format('woff'), url('${ MonotypeCorsivaWoff2Font }') format('woff2');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Tahoma';
        src: url('${ TahomaWoffFont }') format('woff'), url('${ TahomaWoff2Font }') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    html, body {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        user-select: none;
        color: #FFFFFF;
        background-color: #000000;
        cursor: none;
        font-family: 'Monotype Corsiva', sans-serif;
    }
`;
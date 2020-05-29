import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap");

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: "Oxygen", sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
`;
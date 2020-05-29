import styled from 'styled-components';

export const FooterBox = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 14px;
    font-weight: 700;
    height: 64px;
    text-align: center;
    width: 100%;
`;
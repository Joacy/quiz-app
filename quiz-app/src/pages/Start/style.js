import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 32px;
    border-radius: 4px;
    padding: 15px 50px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        opacity: 0.9;
    }
`;
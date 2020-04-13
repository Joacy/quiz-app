import styled from 'styled-components';

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    margin: auto;
`;

export const Button = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 20px;
    border-radius: 4px;
    padding: 15px 50px;
    border: none;
    margin: 0 auto;
    margin-top: 25px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        opacity: 0.9;
    }
`;

export const H2 = styled.h2`
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
    font-weight: 700;
`;

export const H3 = styled.h3`
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
    font-weight: 700;
`;
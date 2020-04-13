import styled from 'styled-components';

export const HeaderBox = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 20px;
    font-weight: 700;
    height: 64px;
    text-align: center;
    width: 100%;
    position: relative;
`;

export const SwitchBox = styled.div`
    position: absolute;
    right: 15px;
`;
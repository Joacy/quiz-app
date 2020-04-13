import styled from 'styled-components';

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: auto;
    width: 100%;
    max-width: 800px;
`;

export const QuestionAnswer = styled.div`
    margin: 30px 0px;
`;

export const Question = styled.p`
    font-size: 18px;
    font-weight: 700;
    background: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 15px;
    color: ${props => props.theme.colors.textButton};
    text-align: left;
`;

export const Answers = styled.ul`
    list-style: none;
`;

export const Answer = styled.li`
    font-size: 16px;
    font-weight: 700;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border-radius: 4px;
    padding: 15px;
    margin-top: 15px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;
`;

export const BotaoQuiz = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    padding: 15px;
    border: none;
    margin: 0 auto;
    margin-top: 15px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        opacity: 0.9;
    }
`;

export const BotaoSend = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textButton};
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    padding: 15px;
    border: none;
    margin: 0 auto;
    margin-top: 15px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        opacity: 0.9;
    }
`;
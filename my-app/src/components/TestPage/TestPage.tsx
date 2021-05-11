import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: lightgrey;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 100%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

export const TestPage: FC = () => {  
    return (
        <Wrapper>
            <span>¯\_( ͡ㆆ ͜ʖ ͡ㆆ)_/¯</span>
        </Wrapper>
    
    )
}
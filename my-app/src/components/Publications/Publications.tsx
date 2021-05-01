import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 100%; 
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Publications: FC = () => {  
    return (
        <Wrapper>
            Publications
        </Wrapper>
    )
}
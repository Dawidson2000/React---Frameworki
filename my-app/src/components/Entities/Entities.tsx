import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #00ff22;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 100%;  
`;

export const Entities: FC = () => {  
    return (
        <Wrapper/>
    )
}
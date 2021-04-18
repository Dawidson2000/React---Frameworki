import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: blue;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 15px  
`;

export const Workspaces: FC = () => {  
    return (
        <Wrapper/>
    )
}
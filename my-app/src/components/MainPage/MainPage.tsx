import React, {FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import { getSuggestedQuery } from '@testing-library/dom';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f5f7f9;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@500&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

async function getUser(): Promise<any>{
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const userData = await userResponse.json();
    return userData;;
}

const MainPage: FC = () => {  
    return (
        <Wrap>
            <TopBar/>
            <Content>
                <LeftMenu/>
            </Content>
        </Wrap>
    )
}
export default MainPage;

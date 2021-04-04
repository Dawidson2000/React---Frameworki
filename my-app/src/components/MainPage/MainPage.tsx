import React, {FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgrey;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () => {
    return (
        <Wrap>
            <TopBar/>
            <Content>
            </Content>
        </Wrap>
    )
}

/*function MainPage() {
    return (
        <Wrap>
            <TopBar/>
            <Content>
                <div>content</div>
            </Content>
        </Wrap>
    );
  }*/

export default MainPage;
